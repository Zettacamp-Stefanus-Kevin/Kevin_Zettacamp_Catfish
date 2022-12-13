import { Component, OnInit, ViewChild } from '@angular/core';
import { SubSink } from 'subsink';
import { MenuService } from '../menu.service';
import { menu } from '../menu';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { debounceTime } from 'rxjs';
import { FormControl } from '@angular/forms';

export interface kategory {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css'],
})
export class MenuListComponent implements OnInit {
  private subs = new SubSink();
  menu: menu[] = [];

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this?.init(this.paginator);
    this.filterKategori();
  }


  init(paginationObj: any) {
    const pagination: any = {
      page: paginationObj?.page ?? 1,
      limit: paginationObj?.limit ?? 5,
    };

    this.subs.sink = this.menuService
      .getMenu(pagination, this.searchKategori)
      .subscribe((resp: any) => {
        this.paginator.length = resp.data?.GetAllRecipesNotLogin?.count;

        this.menu = resp.data.GetAllRecipesNotLogin.data_recipes;

        console.log(this.menu);
        
      });
  }

  //filter kategory===================
  kategori: kategory[] = [
    { value: '', viewValue: 'All' },
    { value: 'side dish', viewValue: 'Side Dish' },
    { value: 'appetizer', viewValue: 'Appetizer' },
    { value: 'dessert', viewValue: 'Dessert'},
    { value: 'cocktail', viewValue: 'Cocktail'}
  ];

  kategoriFilter = new FormControl();
  searchKategori: any;
  value = '';

  filterKategori() {
    this.kategoriFilter.valueChanges.pipe(debounceTime(300)).subscribe((val) => {
      this.searchKategori = val;

      this.init(true);
    });
  }

  @ViewChild('paginator') paginator!: MatPaginator;

  pageSizeOptions: number[] = [5];

  onPagination(event: any) {
    const pagination = {
      limit: event?.pageSize,
      page: event?.pageIndex + 1,
    };
    this.init(pagination);
  }
}
