import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { CartService } from '../cart.service';
import { menutrans } from '../menutrans';

@Component({
  selector: 'app-cart-update',
  templateUrl: './cart-update.component.html',
  styleUrls: ['./cart-update.component.css']
})
export class CartUpdateComponent implements OnInit {

  noteForm!: FormGroup

  constructor(private cartService: CartService,
    public dialog: MatDialogRef<CartUpdateComponent>,
    private translate : TranslateService,
    @Inject(MAT_DIALOG_DATA) public cart: any) { }

  ngOnInit(): void {
    this.noteForm = new FormGroup({
      // 'editNoteId': new FormControl(null),
      'newNote': new FormControl(null)
    })
    this.noteForm.patchValue(this.cart)

  }

  b: any

  onSubmit() {
    if (this.noteForm.valid) {
      const a = {
        editNoteId: this.cart.id,
        ...this.noteForm.value
      }
      this.dialog.close(a)
      // this.cartService.updateNote(a).subscribe((item) => {
      //   this.b = item.data
      //   console.log(item); 
      // })

    } else {
      Swal.fire({
        icon: 'error',
        title: this.translate.instant("Failed"),
        text: this.translate.instant("Try again"),
      });
      this.noteForm.markAllAsTouched();
    }
  }

  onClick() {
    this.dialog.close();
  }

}
