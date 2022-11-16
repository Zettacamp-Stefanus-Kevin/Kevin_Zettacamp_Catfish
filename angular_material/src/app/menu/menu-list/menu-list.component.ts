import { Component, OnInit } from '@angular/core';
import { SubSink } from 'subsink';
import { MenuService } from '../menu.service';
import { menu } from '../menu';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {

  private subs = new SubSink();
  menu:menu[]=[]

  constructor(private menuService : MenuService
    ) { }

  ngOnInit(): void {
    this.subs.sink =this.menuService.getMenu().subscribe((resp:any )=> {
      this.menu = resp.data.GetAllRecipes.data_recipes;
      console.log(this.menu)
      console.log(resp)
    })
  }


  // list = [{
  //   img: "https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/rib-eye_steak_with_61963_16x9.jpg",
  //   judul: "Tenderloin Steak",
  //   ingredient: "mash popatoes, meat 250gr",
  //   text: "Steak yang di olah menggunakan daging yang masih fresh, dan bisa dinikmati dengan tingkat kematangan yang diingankan oleh customer"
  // }, {

  //   img: "https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/rib-eye_steak_with_61963_16x9.jpg",
  //   judul: "Sirloin Steak",
  //   ingredient: "popatoes wedges, meat 250gr",
  //   text: "Steak yang di olah menggunakan daging yang masih fresh, dan bisa dinikmati dengan tingkat kematangan yang diingankan oleh customer"
  // }, {
  //   img: "https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/rib-eye_steak_with_61963_16x9.jpg",
  //   judul: "Wagyu Steak",
  //   ingredient: "mash popatoes, meat 250gr",
  //   text: "Steak yang di olah menggunakan daging yang masih fresh, dan bisa dinikmati dengan tingkat kematangan yang diingankan oleh customer"
  // },{
  //   img: "https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/rib-eye_steak_with_61963_16x9.jpg",
  //   judul: "Tenderloin Steak",
  //   ingredient: "mash popatoes, meat 250gr",
  //   text: "Steak yang di olah menggunakan daging yang masih fresh, dan bisa dinikmati dengan tingkat kematangan yang diingankan oleh customer"
  // }, {

  //   img: "https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/rib-eye_steak_with_61963_16x9.jpg",
  //   judul: "Sirloin Steak",
  //   ingredient: "popatoes wedges, meat 250gr",
  //   text: "Steak yang di olah menggunakan daging yang masih fresh, dan bisa dinikmati dengan tingkat kematangan yang diingankan oleh customer"
  // }, {
  //   img: "https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/rib-eye_steak_with_61963_16x9.jpg",
  //   judul: "Wagyu Steak",
  //   ingredient: "mash popatoes, meat 250gr",
  //   text: "Steak yang di olah menggunakan daging yang masih fresh, dan bisa dinikmati dengan tingkat kematangan yang diingankan oleh customer"
  // }
  // ]

 

 

}
