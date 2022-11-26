import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MenuService } from '../menu.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { menu } from '../menu';


@Component({
  selector: 'app-menu-detail',
  templateUrl: './menu-detail.component.html',
  styleUrls: ['./menu-detail.component.css']
})
export class MenuDetailComponent implements OnInit {

  detailForm: any

  constructor(private menuService: MenuService,
    public dialog: MatDialogRef<MenuDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public menu: menu,
  ) { }

  ngOnInit(): void {
    let data = Number(this.menu.remain_order)
    
    this.detailForm = new FormGroup({
      'id': new FormControl(null),
      'amount': new FormControl(null, [Validators.required, Validators.min(1),Validators.max(data)]),
      'note': new FormControl(null),
    })
    this.detailForm.patchValue(this.menu)
    console.log(this.menu)
  }

  onSubmit() {
    if (this.detailForm.valid) {
      const bebas = {
        id: this.menu.id,
        ...this.detailForm.value
      }
      this.menuService.addCart(this.detailForm.value).subscribe((resp) => {
        this.detailForm.value
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Your Menu Add to Cart',
        });
        this.dialog.close();
      },err=>{
        Swal.fire({
          icon: 'error',
          title: 'EH, kamu lupa ya?',
          text: err.message,
        });
      }
      );
      console.log(this.detailForm.value);
      
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Failed',
        text: 'Try again',
      });
      this.detailForm.markAllAsTouched();
    }

  }

  onClick() {
    this.dialog.close();
  }
}
