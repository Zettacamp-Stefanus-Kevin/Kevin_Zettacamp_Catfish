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

  // list = [{
  //   judul: "daging sapi",
  //   text: "10"
  // },{
  //   judul: "kecap",
  //   text: "10"
  // },{
  //   judul: "MSG",
  //   text: "10"
  // },{
  //   judul: "daging ayam",
  //   text: "10"
  // },{
  //   judul: "sayuran",
  //   text: "10"
  // },{
  //   judul: "kentang",
  //   text: "10"
  // }, ]

  private subs = new SubSink();
  cart:cart[]=[]
  
  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.subs.sink =this.cartService.getCart().subscribe((resp:any )=> {
      this.cart = resp.data.GetAllTransactions.data;
      console.log(this.cart)
      console.log(resp)
    })
  }

}
