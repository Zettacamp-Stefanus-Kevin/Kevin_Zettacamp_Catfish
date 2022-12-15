import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { LoginService } from './login.service';
import { SubSink } from 'subsink';
import { TranslateService } from '@ngx-translate/core';
import { ForgetComponent } from './forget/forget.component';
import { MatDialog } from '@angular/material/dialog';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  private subs = new SubSink();

  hide = true;

  loginForm: any = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required]),
  });

  constructor(
    private router: Router,
    private loginService: LoginService,
    private translate: TranslateService,
    private dialog: MatDialog,
    private appComponent: AppComponent
  ) {}

  ngOnInit(): void {}

  getErrorMessage() {
    if (this.loginForm.get('email').hasError('required')) {
      return 'This field is required !';
    }
    return this.loginForm.get('email').hasError('email')
      ? 'Not a valid email'
      : '';
  }

  onSubmit(loginForm: any) {
    if (this.loginForm.valid) {
      this.subs.sink = this.loginService.getToken(loginForm).subscribe(
        (data) => {
          let adminToken: any;
          let role: any;
          let name: any;
          let email: any;
          let balance: number;
          adminToken = data?.data?.Login?.token;
          role = data?.data?.Login?.role;
          name = data?.data?.Login?.first_name;
          email = data?.data?.Login?.email;
          balance = data?.data?.Login?.balance;

          localStorage.setItem('getToken', adminToken);
          localStorage.setItem('userData', role);
          localStorage.setItem('name', name);
          localStorage.setItem('email', email);
          localStorage.setItem('balance', JSON.stringify(balance));

          Swal.fire({
            icon: 'success',
            title:
              this.translate.instant('hello ') + data?.data?.Login?.first_name,
            text: this.translate.instant('Welcome to our Restaurant'),
          }).then(() => {
            this.router.navigate(['homepage']);
            this.appComponent.role = role;
            this.appComponent.token = adminToken;
            this.appComponent.name = name;
            this.appComponent.balance = balance;
          });
        },
        (err) => {
          Swal.fire({
            icon: 'error',
            title: this.translate.instant('Error'),
            text: err.message,
          });
        }
      );
    } else {
      Swal.fire({
        icon: 'error',
        title: this.translate.instant('Error'),
        text: this.translate.instant('Data not Completed'),
      });
    }
  }

  forget() {
    const dialogRef = this.dialog.open(ForgetComponent, {
      width: 'fit-content',
      height: 'fit-content',
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        this.router.navigate(['homepage']);
      }
    });
  }
}
