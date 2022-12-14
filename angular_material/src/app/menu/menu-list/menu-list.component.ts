import { Component, OnInit, ViewChild } from '@angular/core';
import { SubSink } from 'subsink';
import { MenuService } from '../menu.service';
import { menu } from '../menu';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { debounceTime } from 'rxjs';
import { FormControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

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

  constructor(private menuService: MenuService,
    private translate : TranslateService,) {}

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
    { value: '', viewValue:  this.translate.instant('All') },
    { value: 'appetizer', viewValue:  this.translate.instant('Appetizer')},
    { value: 'main course', viewValue: this.translate.instant('Main Course')},
    { value: 'dessert', viewValue: this.translate.instant('Dessert')},
    { value: 'side dish', viewValue:  this.translate.instant('Side Dish')},
    { value: 'cocktail', viewValue: this.translate.instant('Cocktail')},
    { value: 'mocktail', viewValue: this.translate.instant('Mocktail')},
    { value: 'drink', viewValue: this.translate.instant('Drink')},
   
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
