import { Component, OnInit } from '@angular/core';
import { SubSink } from 'subsink';
import { cart } from '../cart';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

  private subs = new SubSink();
  cart: cart[] = []

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.init()
  }

  init() {
    // this.subs.sink = this.cartService.getCart().subscribe((resp: any) => {
    //   const data = resp.data.GetOrder;
    //   const id = data.id;

    //   const menus: any = [];

    //   data.menu.forEach((item: any) => {
    //     menus.push({
    //       trans_id: id,
    //       ...item
    //     })
    //   })

    //   console.log(menus)
    //   this.cart = menus
    // })

    this.subs.sink = this.cartService.getCart().subscribe((resp: any) => {
      this.cart = resp.data.GetOrder.menu;

      console.log(resp.data.GetOrder.menu);
    })

 
  }

  
}
