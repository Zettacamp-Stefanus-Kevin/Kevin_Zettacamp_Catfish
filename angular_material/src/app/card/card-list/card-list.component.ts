import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/model/card.service';
import { Card } from 'src/app/model/card';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  list: Card[]=[]

  constructor(private cardService:CardService) { }

  ngOnInit(): void {
    this.cardService.getCards().subscribe(data =>{
      this.list = data
      console.log(this.list)
    })
  }


}
