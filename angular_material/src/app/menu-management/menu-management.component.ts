import { Component, OnInit, ViewChild } from '@angular/core';
import { SubSink } from 'subsink';
import { MenuManagementService } from './menu-management.service';
import { MatTableDataSource } from '@angular/material/table';
import { menu } from './menu';
import { MatDialog } from '@angular/material/dialog';
import { MenuManagementInputComponent } from './menu-management-input/menu-management-input.component';
import { MenuManagementUpdateComponent } from './menu-management-update/menu-management-update.component';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import Swal from 'sweetalert2';
import copy from 'fast-copy';
import { FormControl } from '@angular/forms';

export interface status{
  value : string;
  viewValue: string;
}
@Component({
  selector: 'app-menu-management',
  templateUrl: './menu-management.component.html',
  styleUrls: ['./menu-management.component.css']
})
export class MenuManagementComponent implements OnInit {

  private subs = new SubSink();
  menu: menu[] = []

  filterRecipeName: string = ""

  displayedColumns: string[] = ['recipe_name', 'ingredients', 'description', 'hightlight', 'specialoffers', 'remain_order', 'price', 'status', 'actions'];
  dataSource = new MatTableDataSource([])

  constructor(private menuService: MenuManagementService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.init(this.paginator)
    this.filterName()
    this.filterStatus()
  }

  init(paginationObj: any) {

    const pagination: any = {
      page: paginationObj?.page ?? 1,
      limit: paginationObj?.limit ?? 5,
    }

    this.subs.sink = this.menuService.getRecipe(pagination, this.searchName, this.searchStatus).subscribe(resp => {

      this.paginator.length = resp.data.GetAllRecipes.count;

      // this.paginator.pageSize = this.pageSizeOptions[0];

      this.menu.push(resp.data.GetAllRecipes.data_recipes)
      console.log(resp.data.GetAllRecipes.data_recipes)
      this.dataSource.data = resp.data.GetAllRecipes.data_recipes
      console.log(this.menu);
      console.log(resp);
    })
  }

  openDialog() {
    const dialogRef = this.dialog.open(MenuManagementInputComponent, {
      width: '100%', height: '100%'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.menuService.addRecipe(result).subscribe(() => {
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Your work has been saved',
        });
        this.init(true)
      })
      console.log('The dialog was closed')
    }
    );
  }

  a: any

  onEdit(parameter: any) {
    console.log(parameter);
    const bebas: any = {
      ...parameter, ingredients: parameter.ingredients.map((ingredient: any) => {
        return { ingredient_id: ingredient.ids.id, stock_used: ingredient.stock_used, name: ingredient.ids.name }
      })
    }
    console.log(bebas);

    const dialogRef = this.dialog.open(MenuManagementUpdateComponent, {
      width: '100%', height: '100%',
      data: bebas || null
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.init(result)
      }
      console.log('The dialog was closed');
    }
    );
  }

  onDelete(parameter: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "this menu will be permanently deleted!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete now!'
    }).then((result: any) => {
      if (result.isConfirmed) {
        this.menuService.deleteRecipe(parameter).subscribe(resp => {
          Swal.fire({
            title: 'Deleted!',
            text: "this menu has been deleted",
            icon: 'success',
          })
          this.init(true)
        })
      }
    })

    console.log(parameter);
  }



  checked = false;

  //toogle--------------------------------------------------------

  onChanged(check: any) {
    check = copy(check)
    if (check.status === 'active') {
      check.status = 'unpublish'
    } else if (check.status === 'unpublish') {
      check.status = 'active'
    }
    Swal.fire({
      title: 'Are you sure want change status to ' + check.status + '?',
      showDenyButton: false,
      showCancelButton: true,
      showConfirmButton: true,
      denyButtonText: `Yes`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.menuService.updatepublish(check).subscribe(() => {
          Swal.fire({
            title: 'you have been change status to ' + check.status
          })
          this.init(true)
        })
      }
    })
  }

  onHigh(check: any) {
    check = copy(check)
    if (check.is_hightlighted === true) {
      check.is_hightlighted = false
    } else if (check.is_hightlighted === false) {
      check.is_hightlighted = true
    }
    Swal.fire({
      title: 'Are you sure want change this menu to ' + check.is_hightlighted + '?',
      showDenyButton: false,
      showCancelButton: true,
      showConfirmButton: true,
      denyButtonText: `Yes`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.menuService.updateHighlight(check).subscribe(() => {
          Swal.fire({
            title: 'you have been change status to ' + check.is_hightlighted
          })
          this.init(true)
        })
      }
    })
  }

  onSpecial(check: any) {
    check = copy(check)
    if (check.is_special_offers === true) {
      check.is_special_offers = false
    } else if (check.is_special_offers === false) {
      check.is_special_offers = true
    }
    Swal.fire({
      title: 'Are you sure want change this menu to ' + check.is_special_offers + '?',
      showDenyButton: false,
      showCancelButton: true,
      showConfirmButton: true,
      denyButtonText: `Yes`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.menuService.updateSPrice(check).subscribe(() => {
          Swal.fire({
            title: 'you have been change status to ' + check.is_special_offers
          })
          this.init(true)
        })
      }
    })
  }

//names FIlter===================================

  nameFilter = new FormControl();
  searchName : any;

  filterName(){
    this.nameFilter.valueChanges.subscribe((val)=>{
      this.searchName = val;
      this.init(true)
    })
  }

   //Status FIlter=======================================

   status : status[] = [
    {value: 'active', viewValue : 'All'},
    {value : 'unpublish', viewValue: 'Not Active'},
    {value : 'active', viewValue: 'Active'},
    {value : 'deleted', viewValue: 'Deleted'},
   ];

   statusFilter = new FormControl();
   searchStatus:any
   value = '';

   filterStatus(){
    this.statusFilter.valueChanges.subscribe((val)=>{
      this.searchStatus = val;
      this.init(true)
    })
   }



  @ViewChild('paginator') paginator!: MatPaginator

  pageSizeOptions: number[] = [5];

  onPagination(event: any) {
    console.log(event);

    const pagination = {
      limit: event?.pageSize,
      page: event?.pageIndex + 1
    }
    this.init(pagination)
  }


}
