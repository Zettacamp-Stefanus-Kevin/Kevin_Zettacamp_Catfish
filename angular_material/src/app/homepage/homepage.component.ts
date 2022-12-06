import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { SubSink } from 'subsink';
import { HomepageService } from './homepage.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  private subs = new SubSink();
  dataImages = { path: '', width: 0, height: 0 }
  images: any
  images2: {}[] = [];
  diskon: any;
  deals: any;

  constructor(private homeService: HomepageService) { }

  ngOnInit(): void {
    this.init();
    this.init2()

  }

  init() {
    this.subs.sink = this.homeService.getMenu().valueChanges.subscribe((resp: any) => {
      this.images = resp.data?.GetAllRecipesNotLogin?.data_recipes;
      for (let a of this.images) {
        this.images2.push(this.dataImages)
      }
      console.log(resp);
      console.log(this.images);
    })
  }

  init2() {

    this.subs.sink = this.homeService.getDiskon().valueChanges.subscribe((resp: any) => {
      this.diskon = resp.data?.GetAllRecipesNotLogin?.data_recipes;
      // this.deals = resp.data?.GetAllRecipesNotLogin?.data_recipes
      console.log(resp);
      console.log(this.diskon);
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
    // this.init(pagination)
  }
}
