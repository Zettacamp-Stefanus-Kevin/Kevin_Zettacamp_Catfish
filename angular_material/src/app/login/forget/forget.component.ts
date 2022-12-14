import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { LoginService } from '../login.service';
import { UpdateComponent } from './update/update.component';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css'],
})
export class ForgetComponent implements OnInit {
  firstFormGroup: FormGroup = this.fb.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup: FormGroup = this.fb.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup: FormGroup = this.fb.group({
    thirdCtrl: ['', Validators.required],
  });
  fourthFormGroup: FormGroup = this.fb.group({
    fourthCtrl: ['', Validators.required],
  });

  constructor(
    private loginService: LoginService,
    public dialogref: MatDialogRef<ForgetComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private dialog: MatDialog,
    private router: Router,
    private translate: TranslateService,
  ) { }

  ngOnInit(): void { }

  @ViewChild('stepper') stepper: any;

  onFirstStepDone() {
    if (!this.firstFormGroup.valid) {
      this.firstFormGroup.markAllAsTouched();
      return;
    } else {
      this.loginService.getUser(this.firstFormGroup.value.firstCtrl).subscribe(
        (data: any) => {
          console.log(data);
          this.stepper.next();
        },
        (err: any) => {
          Swal.fire({
            title: this.translate.instant('Email not Found'),
            text: err,
            icon: 'error',
          }).then(() => {
            this.firstFormGroup.markAllAsTouched();
            return;
          });
        }
      );
    }
  }

  // getErrorMessage() {
  //   if (this.firstFormGroup.get('email').hasError('required')) {
  //     return 'You must input your email';
  //   }
  //   return this.firstFormGroup.get('email').hasError('email')
  //     ? 'Not a valid email'
  //     : '';
  // }

  onSecondStepDone() {
    if (!this.secondFormGroup.valid) {
      this.secondFormGroup.markAllAsTouched();
      return;
    }
    this.stepper.next();
  }

  onThirdStepDone() {
    if (!this.thirdFormGroup.valid) {
      this.thirdFormGroup.markAllAsTouched();
      return;
    }
    this.stepper.next();
  }

  onFourthStepDone() {
    if (!this.fourthFormGroup.valid) {
      this.fourthFormGroup.markAllAsTouched();
      return;
    } else {
      if (
        this.fourthFormGroup.value.fourthCtrl ===
        this.thirdFormGroup.value.thirdCtrl
      ) {
        const value = {
          email: this.firstFormGroup.value.firstCtrl,
          password: this.fourthFormGroup.value.fourthCtrl,
          answer: this.secondFormGroup.value.secondCtrl,
        };
        console.log(value);
        this.loginService.forgetPassword(value).subscribe(
          (data: any) => {
            Swal.fire({
              title: this.translate.instant('Password changed' ),
              text: data.result,
              icon: 'success',
            });
            this.dialogref.close();
          },
          (err) => {
            Swal.fire({
              title: this.translate.instant('Answer wrong' ),
              text: err,
              icon: 'error',
            }).then(() => {
              this.fourthFormGroup.markAllAsTouched();
              return;
            });
          }
        );
      } else {
        this.fourthFormGroup.markAllAsTouched();
        return;
      }
    }
  }

  reset() {
    this.dialogref.close();
    const dialogRef = this.dialog.open(UpdateComponent, {
      width: '50%',
      height: '50%',
    });
  }

  onClick() {
    this.dialogref.close();
  }
}
