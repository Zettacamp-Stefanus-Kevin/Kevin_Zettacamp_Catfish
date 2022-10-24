import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-cardlist',
  templateUrl: './cardlist.component.html',
  styleUrls: ['./cardlist.component.css']
})
export class CardlistComponent implements OnInit {


  list: { img: string, Nama: string, Jenis: string, Desc: string }[] = []


  constructor(private heroService: HeroService) { }

  ngOnInit() :void {
    this.list = this.heroService.list
    console.log(this.list)
  }


}
