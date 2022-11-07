import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2'
import { Form } from 'src/app/service/form';


@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {


  myGroup: any = new FormGroup({
    id: new FormControl(null, Validators.required),
    civility: new FormControl(null, Validators.required),
    firstName: new FormControl(null, Validators.required),
    lastName: new FormControl(null, Validators.required),
    dateOfBirth: new FormControl(null, Validators.required),
    gender: new FormControl(null, Validators.required)
  })

  constructor(
    public dialogRef: MatDialogRef<PopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Form) { }


  onSubmit() {
    console.log(this.myGroup.value)
    const isvalid = this.myGroup.valid
    if (!isvalid) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Data not Completed'
      })
    } else {
      this.dialogRef.close(this.myGroup.value);
      // Swal.fire({
      //   icon: 'success',
      //   title: 'Mantap',
      //   text: 'Data Complete to upload'
      // })
    }
  }

  onClick() {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
