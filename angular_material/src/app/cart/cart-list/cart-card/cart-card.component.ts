import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-card',
  templateUrl: './cart-card.component.html',
  styleUrls: ['./cart-card.component.css']
})
export class CartCardComponent implements OnInit {

  @Input()ingredient:any;

  constructor() { }

  ngOnInit(): void {
  }

  addStock(){

  }
  
  deleteStock(){
    
  }

}
