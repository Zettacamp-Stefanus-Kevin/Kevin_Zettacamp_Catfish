import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/menu/menu.service';
import { SubSink } from 'subsink';
import Swal from 'sweetalert2';
import { cart } from '../cart';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

  private subs = new SubSink();
  cart: cart[] = []
  sisa: any
  price: any;
  order_id: any;
  order: any;
  user: any;

  constructor(
    private cartService: CartService,
    private router : Router

    ) { }

  ngOnInit(): void {
    this.init()
  }

  init() {
    this.subs.sink = this.cartService.getCart().valueChanges.subscribe((resp: any) => {
      const data = resp.data.GetOrder;
      this.price = resp.data.GetOrder.total_price.toLocaleString('ID')
      this.order = resp.data.GetOrder.order_date
      this.order_id = resp.data.GetOrder.id
      this.user = (resp.data.GetOrder.user_id.first_name +' '+ resp.data.GetOrder.user_id.last_name +'...')
      console.log(this.user);
      

      let menus: any = [];

      data.menu.forEach((item: any) => {
        menus.push({
          ...item
        })
      })
      console.log(resp.data.GetOrder)
      this.cart = menus
      console.log(this.cart);
    })

  }

  orderMenu(parameter: any) {
    console.log(parameter);

    this.cartService.orderMenu(parameter).subscribe((resp) => {
      console.log(resp);
      if (resp.data.OrderNow.order_status == 'failed') {
        Swal.fire({
          icon: 'error',
          title: 'pesanan anda pada tanggal ' + resp.data.OrderNow.order_date,
          text: resp.data.OrderNow.order_status,
          footer: "Sorry, You have Menu Out of Stock"
        });
 
      } else {
        Swal.fire({
          icon: 'success',
          title: 'pesanan anda pada tanggal ' + resp.data.OrderNow.order_date,
          text: resp.data.OrderNow.order_status
        });
      }
      
      this.init()
    }, err=>{
      Swal.fire({
        icon: 'error',
        title: err.message
      });
    });
    
   
  }
  

}
