import { Component, OnInit, ViewChild } from '@angular/core';
import { SubSink } from 'subsink';
import { MenuService } from '../menu.service';
import { menu } from '../menu';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {

  private subs = new SubSink();
  menu: menu[] = []

  constructor(private menuService: MenuService
  ) { }

  ngOnInit(): void {
    this?.init(this.paginator)
  }

  init(paginationObj:any) {

    const pagination : any = {
      page: paginationObj?.page ?? 1,
      limit: paginationObj?.limit ?? 5,
      status : 'publish'
    }

    this.subs.sink = this.menuService.getMenu(pagination).subscribe((resp: any) => {
      
      this.paginator.length = resp.data?.GetAllRecipes?.count;
      // this.paginator.pageSize = this.pageSizeOptions[0];
      
      this.menu = resp.data.GetAllRecipes.data_recipes;
      console.log(this.menu)
      console.log(resp)
    })

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



