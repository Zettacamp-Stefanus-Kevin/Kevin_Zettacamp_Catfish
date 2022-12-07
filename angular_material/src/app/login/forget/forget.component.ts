import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { LoginService } from '../login.service';
import { UpdateComponent } from './update/update.component';


@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css']
})
export class ForgetComponent implements OnInit {

  forgetForm!: FormGroup

  constructor(private loginService: LoginService,
    public dialogref: MatDialogRef<ForgetComponent>,
    private translate : TranslateService,
    @Inject(MAT_DIALOG_DATA) public data : any,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.forgetForm = new FormGroup({
      'email' : new FormControl(null)
    })
    this.forgetForm.patchValue(this.data)

  }

  reset() {
    this.dialogref.close();
    const dialogRef = this.dialog.open(UpdateComponent, {
      width: '50%', height: '50%',
    });
    
  }

  onClick() {
    this.dialogref.close();
  }

}
