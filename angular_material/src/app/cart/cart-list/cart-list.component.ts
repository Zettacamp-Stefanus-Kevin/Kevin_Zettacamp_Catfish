import { Component, OnInit } from '@angular/core';
import { SubSink } from 'subsink';
import Swal from 'sweetalert2';
import { cart } from '../cart';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css'],
})
export class CartListComponent implements OnInit {
  private subs = new SubSink();
  cart: cart[] = [];
  sisa: any;
  price: any;
  order_id: any;
  order: any;
  user: any;
  data: any;
  amount: any;
  menu: any;

  constructor(
    private cartService: CartService,
    private router: Router,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.init();
  }

  init() {
    this.subs.sink = this.cartService
      .getCart()
      .valueChanges.subscribe((resp: any) => {
        this.data = resp?.data?.GetOrder;
        this.price = resp?.data?.GetOrder?.total_price?.toLocaleString('ID');
        this.order = resp?.data?.GetOrder?.order_date;
        this.order_id = resp?.data?.GetOrder?.id;
        this.amount = resp?.data?.GetOrder?.menu.amount;
        this.menu = resp?.data?.GetOrder?.menu.length;
        this.user =
          resp?.data?.GetOrder?.user_id?.first_name +
          ' ' +
          resp?.data?.GetOrder?.user_id?.last_name +
          '...';

        let menus: any = [];

        this.data.menu.forEach((item: any) => {
          menus.push({
            ...item,
          });
        });
        this.cart = menus;
      });
  }

  orderMenu(parameter: any) {
    this.cartService.orderMenu(parameter).subscribe(
      (resp) => {
        if (resp.data.OrderNow.order_status == 'failed') {
          Swal.fire({
            icon: 'error',
            title:
              this.translate.instant('pesanan anda pada tanggal') +
              resp.data.OrderNow.order_date,
            text: resp.data.OrderNow.order_status,
            footer: this.translate.instant('Sorry, You have Menu Out of Stock'),
          });
          this.data = [];
          this.cartService.getCart().refetch();
        } else {
          Swal.fire({
            icon: 'success',
            title:
              this.translate.instant('pesanan anda pada tanggal') +
              resp.data.OrderNow.order_date,
            text: resp.data.OrderNow.order_status,
          }).then(() => {
            this.router.navigate(['cart']).then(() => {
              window.location.reload();
            });
          });
        }
      },
      (err) => {
        Swal.fire({
          icon: 'error',
          title: this.translate.instant('Error'),
          text: err.message,
        });
      }
    );
    this.cartService.getCart().refetch();
  }
}
