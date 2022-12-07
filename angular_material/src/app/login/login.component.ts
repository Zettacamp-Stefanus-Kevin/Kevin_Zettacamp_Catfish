import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { LoginService } from './login.service';
import { SubSink } from 'subsink';
import { TranslateService } from '@ngx-translate/core';
import { ForgetComponent } from './forget/forget.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  private subs = new SubSink();

  hide = true

  loginForm: any = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required])
  });

  constructor(
    private router: Router,
    private loginService: LoginService,
    private translate: TranslateService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    // localStorage.setItem('getToken', '');
    //     localStorage.setItem('userData', '');
    //     localStorage.setItem('name', '');
  }

  getErrorMessage() {
    if (this.loginForm.get('email').hasError('required')) {
      return 'You must input your email';
    }
    return this.loginForm.get('email').hasError('email') ? 'Not a valid email' : '';
  }

  onSubmit(loginForm: any) {
    if (this.loginForm.valid) {
      this.subs.sink = this.loginService.getToken(loginForm).subscribe((data) => {
        // this.loginService.getToken(this.loginForm.value).subscribe((data)=>{

        // })
        let adminToken: any
        let role: any
        let name: any
        let email: any
        adminToken = data?.data?.Login?.token;
        role = data?.data?.Login?.role
        name = data?.data?.Login?.first_name
        email = data?.data?.Login?.email

        localStorage.setItem('getToken', adminToken);
        localStorage.setItem('userData', role);
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        console.log(data.data.Login.token)
        console.log(data.data.Login.role)
        console.log(data.data.Login.first_name)

        console.log('berhasil')
        this.loginForm.reset();


        Swal.fire({
          icon: 'success',
          title: this.translate.instant("hello") + data?.data?.Login?.first_name,
          text: this.translate.instant("Welcome to our Restaurant")

        }).then(() => {
          this.router.navigate(['homepage']).then(() => {
            window.location.reload()
          })
        });

      }, err => {
        Swal.fire({
          icon: 'error',
          title: this.translate.instant("Error"),
          text: err.message
        });
      }
      )

    } else {
      console.log('gagal');
      Swal.fire({
        icon: 'error',
        title: this.translate.instant("Error"),
        text: this.translate.instant("Data not Completed")
      });
    }
  }

  forget() {
    const dialogRef = this.dialog.open(ForgetComponent, {
      width: '50%', height: '50%',
    });
    
    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        this.router.navigate(['homepage'])
      }
    });
  }

  // forget() {
  //   const dialogRef = this.dialog.open(ForgetComponent, {
  //     width: '30%', height: '30%', 
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     this.loginService.updateToken(result).subscribe((item)=>{
  //       this.b = item.data
  //     })
  //       Swal.fire({
  //         icon: 'success',
  //         title: this.translate.instant("Success"),
  //         text: this.translate.instant("Your work has been saved"),
  //       });
  //     console.log('The dialog was closed');
  //   });
  // }

}
