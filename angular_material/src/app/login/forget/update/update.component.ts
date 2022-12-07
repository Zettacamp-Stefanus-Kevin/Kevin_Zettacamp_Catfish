import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { LoginService } from '../../login.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  updateForm!: FormGroup

  constructor(private loginService: LoginService,
    public dialogref: MatDialogRef<UpdateComponent>,
    private translate : TranslateService,
    @Inject(MAT_DIALOG_DATA) public data : any) { }

  ngOnInit(): void {
    this.updateForm = new FormGroup({
      'email' : new FormControl(null),
      'password' : new FormControl(null)
    })
 
    this.updateForm.patchValue(this.data)
    console.log(this.data)
  }

  reset() {
   
  }

  onClick() {
    this.dialogref.close();
  }

}
