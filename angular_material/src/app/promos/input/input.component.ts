import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2'
import { promo } from '../../service/promos';
import { PromosService } from 'src/app/service/promos.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  promoForm: any = new FormGroup({
    image_url: new FormControl(null),
    title: new FormControl(null, Validators.required),
    sub_title: new FormControl(null, Validators.required),
    ref: new FormControl(null, Validators.required),
    description: new FormControl(null, Validators.required)
  })

  constructor(public dialogRef: MatDialogRef<InputComponent>,
    private promosService: PromosService,
    @Inject(MAT_DIALOG_DATA) public data: promo) { }

  ngOnInit(): void {

  }

  onSubmit() {
    if (this.promoForm.valid) {
      this.promosService.addPromo(this.promoForm.value)
      console.log('berhasil');
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Your work has been saved',
      });
      this.dialogRef.close();
      this.promosService.promoCard().refetch()



    } else {
      console.log('gagal');
      Swal.fire({
        icon: 'error',
        title: 'Failed',
        text: 'Try again',
      });
      
      this.promoForm.markAllAsTouched();
    }
  }

  onClick() {
    this.dialogRef.close();
  }

}
