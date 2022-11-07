import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2'
import { Form } from 'src/app/service/form';
import { TranslateService } from '@ngx-translate/core';
import { DatePipe } from '@angular/common';


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
    private translate : TranslateService,
    private pipi: DatePipe,
    @Inject(MAT_DIALOG_DATA) public data: Form) { }


  onSubmit() {
    console.log(this.myGroup.value)
    const isvalid = this.myGroup.valid
    if (!isvalid) {
      Swal.fire({
        icon: 'error',
        title: this.translate.instant("MyForm.Error"),
        text: this.translate.instant("MyForm.Data not Completed")
      })
    } else {
      this.myGroup.value.dateOfBirth = this.pipi.transform(this.myGroup.value.dateOfBirth)
      this.dialogRef.close(this.myGroup.value);
  
    }
  }

  onClick() {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
