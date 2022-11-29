import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { LoginService } from './login.service';
import { SubSink } from 'subsink';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  private subs = new SubSink();

  loginForm: any = new FormGroup({
    email: new FormControl(null, [Validators.required,Validators.email]),
    password: new FormControl(null,[Validators.required])
  });

  constructor(
    private router: Router,
    private loginService: LoginService,
    private translate : TranslateService,
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
        this.loginService.getToken(this.loginForm.value).subscribe((data)=>{

        })
        let adminToken: any
        let role: any
        let name : any
         adminToken = data?.data?.Login?.token;
         role = data?.data?.Login?.role
         name = data?.data?.Login?.first_name
        
        localStorage.setItem('getToken', adminToken);
        localStorage.setItem('userData', role);
        localStorage.setItem('name', name);
        console.log(data.data.Login.token)
        console.log(data.data.Login.role)
        console.log(data.data.Login.first_name)

        console.log('berhasil')
        this.loginForm.reset();


        Swal.fire({
          icon: 'success',
          title: this.translate.instant("hello") + data?.data?.Login?.first_name,
          text:  this.translate.instant("Welcome to our Restaurant")
          
        }).then(()=>{
          this.router.navigate(['homepage']).then(() => {
            window.location.reload()
          })
        });
       
      })

    } else {
      console.log('gagal');
      Swal.fire({
        icon: 'error',
        title: this.translate.instant("Error"),
        text: this.translate.instant("Data not Completed")
      });
    }
  }

}
