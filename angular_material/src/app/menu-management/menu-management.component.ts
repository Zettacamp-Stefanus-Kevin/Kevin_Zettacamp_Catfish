import { Component, OnInit } from '@angular/core';
import { SubSink } from 'subsink';
import { MenuManagementService } from './menu-management.service';
import { MatTableDataSource } from '@angular/material/table';
import { menu } from './menu';
import { MatDialog } from '@angular/material/dialog';
import { MenuManagementInputComponent } from './menu-management-input/menu-management-input.component';
import { MenuManagementUpdateComponent } from './menu-management-update/menu-management-update.component';

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
    this.init()
  }

  init() {
    this.subs.sink = this.menuService.getRecipe().subscribe(resp => {
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
      console.log('The dialog was closed');
    }

    );
  }

  onEdit(parameter: any) {
    const dialogRef = this.dialog.open(MenuManagementUpdateComponent, {
      width: '100%', height: '100%',
      data: parameter
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    }

    );
  }

  onClick(parameter: any) {
    this.menuService.deleteRecipe(parameter).subscribe(resp => {
      this.init()
    })
    console.log(parameter);
  }

}
