import { Component,Input, OnInit } from '@angular/core';
import { CartService } from '../../cart.service'; 

@Component({
  selector: 'app-cart-card',
  templateUrl: './cart-card.component.html',
  styleUrls: ['./cart-card.component.css']
})
export class CartCardComponent implements OnInit {

  @Input()transaction:any;

  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    
  }
  
  deleteStock(parameter : any){
    this.cartService.deleteCart(parameter).subscribe(()=>{

    })
  }

  orderMenu(parameter : any){
    this.cartService.orderMenu(parameter).subscribe(()=>{

    })
  }
  

}
