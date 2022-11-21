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

  displayedColumns: string[] = ['recipe_name', 'ingredients', 'description', 'price', 'status', 'actions'];
  dataSource = new MatTableDataSource([])

  constructor(private menuService: MenuManagementService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.init(this.paginator)
  }

  init(paginationObj:any) {

    const pagination : any = {
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
        this.init(this.paginator)
      })
      console.log('The dialog was closed')
    }
    );
  }

  onEdit(parameter: any) {
    const dialogRef = this.dialog.open(MenuManagementUpdateComponent, {
      width: '100%', height: '100%',
      data: parameter || null
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    }

    );
  }

  onDelete(parameter: any) {
    this.menuService.deleteRecipe(parameter).subscribe(resp => {
      this.init(this.paginator)
    })
    console.log(parameter);
  }

  @ViewChild('paginator') paginator!: MatPaginator

  pageSizeOptions: number[] = [5];

  onPagination(event:any) {
    console.log(event);
    
    const pagination ={
      limit : event?.pageSize,
      page :  event?.pageIndex+1
    }
    this.init(pagination)
  }


}
