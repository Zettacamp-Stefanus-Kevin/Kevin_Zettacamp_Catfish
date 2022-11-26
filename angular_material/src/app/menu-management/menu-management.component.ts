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

@Component({
  selector: 'app-menu-management',
  templateUrl: './menu-management.component.html',
  styleUrls: ['./menu-management.component.css']
})
export class MenuManagementComponent implements OnInit {

  private subs = new SubSink();
  menu: menu[] = []

  filterRecipeName: string = ""

  displayedColumns: string[] = ['recipe_name', 'ingredients', 'description', 'remain_order', 'price', 'status', 'actions'];
  dataSource = new MatTableDataSource([])

  constructor(private menuService: MenuManagementService,
    private dialog: MatDialog
  ) { }

  // Accent(value: string): string {
  //   let accent:string[] = value.split('');
  //   accent = accent.map(data => {
  //     const splited = data.normalize('NFD').split('');
  //     return splited[0]
  //   })
  //   return accent.join('');
  // }

  // filterByRecipeName() {
  //   let fil = this.menu
  //   fil = fil.filter(data => {
  //     let name = data.recipe_name;
  //     name = name.toLowerCase();
  //     name = name.replace(/[.\s,]/g, '');
  //     name = this.Accent(name)
  //     return name.includes(this.Accent(this.filterName.toLowerCase().replace(/[.\s,]/g, '')))
  //   })
  //   this.dataSource.data = fil
  // }

  ngOnInit(): void {
    this.init(this.paginator)
  }

  init(paginationObj: any) {

    const pagination: any = {
      page: paginationObj?.page ?? 1,
      limit: paginationObj?.limit ?? 5,
    }

    this.subs.sink = this.menuService.getRecipe(pagination).subscribe(resp => {

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

  a:any

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
      if(result){
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
    }).then((result:any) => {
      if (result.isConfirmed){
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

  
  onChanged(event: any, element: any) {
    const check = {
      id: element.id,
      status: event.checked ? 'active' : 'unpublish'
    };
    // if(check.status === 'active'){
    //   check.status = 'active'
    // }else if(check.status === 'unpublish'){
    //   check.status = 'unpublish'
    // }
    // Swal.fire({
    //   title: 'Are you sure want change status to ' + check.status + '?',
    //   showDenyButton: false,
    //   showCancelButton: true,
    //   showConfirmButton: true,
    //   denyButtonText: `Yes`,
    // }).then((result)=>{
    //   if(result.isConfirmed){
    //     this.menuService.updatepublish(check).subscribe(() => {
    //       Swal.fire({
    //         title: 'you have been change status to ' + check.status
    //       })
    //       this.init(true)
    //     })
    //   }
    // })                                  
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
