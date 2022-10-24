import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
import { list } from 'src/app/list';

@Component({
  selector: 'app-cardlist',
  templateUrl: './cardlist.component.html',
  styleUrls: ['./cardlist.component.css'],
  providers: [HeroService]
})
export class CardlistComponent implements OnInit {

  list:any= []

  constructor(private heroService: HeroService) { }

  ngOnInit(){
    this.heroService.list.subscribe(data=>{
     this.list = data
     console.log(this.list)
   })
 }



}
