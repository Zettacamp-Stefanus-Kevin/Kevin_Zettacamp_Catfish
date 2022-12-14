import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { SubSink } from 'subsink';
import { HomepageService } from './homepage.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  private subs = new SubSink();
  dataImages = { path: '', width: 0, height: 0 };
  images: any;
  images2: {}[] = [];
  diskon: any;
  deals: any;


  menu: any = [];
  menuLength: any;
  page = 1;

  constructor(private homeService: HomepageService) {}

  ngOnInit(): void {
    this.init();
    this.init2();
  }

  init() {
    this.subs.sink = this.homeService
      .getMenu()
      .valueChanges.subscribe((resp: any) => {
        this.images = resp.data?.GetAllRecipesNotLogin?.data_recipes;
        for (let a of this.images) {
          this.images2.push(this.dataImages);
        }
      });
  }

  init2() {
    this.subs.sink = this.homeService
      .getDiskon()
      .valueChanges.subscribe((resp: any) => {
        this.diskon = resp.data?.GetAllRecipesNotLogin?.data_recipes;
      });
  }


  onNext() {
    const maxPage = Math.ceil(this.menuLength / 10);
    if (this.page === maxPage) {
      this.page = maxPage;
    } else {
      this.page += 1;
      this.init2();
    }
  }

  onPrevious() {
    if (this.page === 1) {
      this.page = 1;
    } else {
      this.page -= 1;
      this.init2();
    }
  }

  @ViewChild('paginator') paginator!: MatPaginator;

  pageSizeOptions: number[] = [3];

  onPagination(event: any) {
    const pagination = {
      limit: event?.pageSize,
      page: event?.pageIndex + 1,
    };
  }
}
