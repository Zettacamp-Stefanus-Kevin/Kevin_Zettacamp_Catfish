import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../../cart.service';
import { MatDialog } from '@angular/material/dialog';
import { CartUpdateComponent } from '../../cart-update/cart-update.component';
import Swal from 'sweetalert2';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-cart-card',
  templateUrl: './cart-card.component.html',
  styleUrls: ['./cart-card.component.css']
})
export class CartCardComponent implements OnInit {

  @Input() menu: any;

  constructor(private cartService: CartService,
    private dialog: MatDialog,
    private translate : TranslateService
  ) { }

  ngOnInit(): void {

  }

  init() {
    this.cartService.getCart().refetch()
  }

  deleteStock(parameter: any) {
    this.cartService.deleteCart(parameter).subscribe(() => {
      console.log(parameter.id);
      this.init()
    })
  }

  minus(parameter: any) {
    this.cartService.decrAmount(parameter).subscribe(() => {
      console.log(parameter);
      this.init()
    })
  }

  plus(parameter: any) {
    this.cartService.incrAmount(parameter).subscribe(() => {
      console.log(parameter);
      this.init()
    })
  }

  b: any
  editOrder(parameter: any) {
    const dialogRef = this.dialog.open(CartUpdateComponent, {
      width: '30%', height: '30%',
      data: parameter 
    });

    dialogRef.afterClosed().subscribe(result => {
      this.cartService.updateNote(result).subscribe((item)=>{
        this.b = item.data
      })
        Swal.fire({
          icon: 'success',
          title: this.translate.instant("Success"),
          text: this.translate.instant("Your work has been saved"),
        });
        this.init()
      console.log('The dialog was closed');
    });
   
  }

}


