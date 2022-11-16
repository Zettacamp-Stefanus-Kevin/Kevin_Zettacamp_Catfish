import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2'
import { stock } from '../stock';
import { StockManagementService } from '../stock-management.service';

@Component({
  selector: 'app-stock-management-input',
  templateUrl: './stock-management-input.component.html',
  styleUrls: ['./stock-management-input.component.css']
})
export class StockManagementInputComponent implements OnInit {

  stockForm!: FormGroup


  constructor(private stockService: StockManagementService,
    public dialog: MatDialogRef<StockManagementInputComponent>,
    @Inject(MAT_DIALOG_DATA) public stock: stock,
  ) { }

  ngOnInit(): void {
    this.stockForm = new FormGroup({
      'name': new FormControl(null, [Validators.required]),
      'stock': new FormControl(null, [Validators.required]),
    })
  }

  onClick(): void {
    this.dialog.close();
  }

  onSubmit() {
    if (this.stockForm.valid) {
      this.stockService.addStock(this.stockForm.value)
      console.log('berhasil');
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Your work has been saved',
      });
      this.dialog.close();
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
