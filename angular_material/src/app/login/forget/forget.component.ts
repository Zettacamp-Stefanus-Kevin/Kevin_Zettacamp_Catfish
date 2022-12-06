import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css']
})
export class ForgetComponent implements OnInit {

  forgetForm!: FormGroup

  constructor(private loginService: LoginService,
    public dialog: MatDialogRef<ForgetComponent>,
    private translate : TranslateService,
    @Inject(MAT_DIALOG_DATA) public data : any) { }

  ngOnInit(): void {
    this.forgetForm = new FormGroup({
      'securityAnswer' : new FormControl(null),
      'newPassword': new FormControl(null)
    })
    this.forgetForm.patchValue(this.data)

  }

  b: any

  onSubmit() {
    if (this.forgetForm.valid) {
      const a = {
        editNoteId: this.data.id,
        ...this.forgetForm.value
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
      this.forgetForm.markAllAsTouched();
    }
  }

  onClick() {
    this.dialog.close();
  }

}
