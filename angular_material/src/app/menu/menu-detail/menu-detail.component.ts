import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MenuService } from '../menu.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MenuComponent } from '../menu.component';
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
    this.detailForm = new FormGroup({
      'id': new FormControl(null),
      'amount': new FormControl(null, [Validators.required]),
      'note': new FormControl(null),
    })
    this.detailForm.patchValue(this.menu)
    console.log(this.menu)
  
  }
 

  onSubmit() {
    if (this.detailForm.valid) {
      const bebas = {
        id : this.menu.id,
        ...this.detailForm.value
      }

      this.menuService.addCart(this.detailForm.value).subscribe((resp)=> {
        this.detailForm.value
      });
      console.log(this.detailForm.value);
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Your Menu Add to Cart',
      });
      this.dialog.close();
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
