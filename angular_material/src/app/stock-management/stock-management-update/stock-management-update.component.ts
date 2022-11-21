import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2'
import { stock } from '../stock';
import { StockManagementService } from '../stock-management.service';

@Component({
  selector: 'app-stock-management-update',
  templateUrl: './stock-management-update.component.html',
  styleUrls: ['./stock-management-update.component.css']
})
export class StockManagementUpdateComponent implements OnInit {

  stockForm!: FormGroup


  constructor(private stockService: StockManagementService,
    public dialog: MatDialogRef<StockManagementUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public stock: stock ,
  ) { }

  ngOnInit(): void {
    this.stockForm = new FormGroup({
      'id' : new FormControl(null),
      'name': new FormControl(null),
      'stock': new FormControl(null, [Validators.required]),
    })
    this.stockForm.patchValue(this.stock)
    console.log(this.stock)
  }

  onClick(): void {
    this.dialog.close();
  }

  onSubmit() {
    if (this.stockForm.valid) {
     
      this.dialog.close(this.stockForm.value);
    } else {
      console.log('gagal');
      Swal.fire({
        icon: 'error',
        title: 'Failed',
        text: 'Try again',
      });

      this.stockForm.markAllAsTouched();
    }
  }

}
