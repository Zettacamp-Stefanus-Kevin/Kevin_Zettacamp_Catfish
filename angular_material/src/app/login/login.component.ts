import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { LoginService } from './login.service';
import { SubSink } from 'subsink';
import { LocalState } from '@apollo/client/core/LocalState';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private subs = new SubSink();

  loginForm: any = new FormGroup({
    email: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required)
  });

  constructor(
    private router: Router,
    private loginService: LoginService,
  ) { }

  ngOnInit(): void {
    // localStorage.setItem('getToken', '');
    //     localStorage.setItem('userData', '');
  }

  onSubmit(loginForm: any) {
    if (this.loginForm.valid) {
      this.subs.sink = this.loginService.getToken(loginForm).subscribe((data) => {
        this.loginService.getToken(this.loginForm.value).subscribe((data)=>{

        })
        let adminToken: any
        let role: any
         adminToken = data?.data?.Login?.token;
         role = data?.data?.Login?.role
        
        localStorage.setItem('getToken', adminToken);
        localStorage.setItem('userData', role);
        console.log(data.data.Login.token)
        console.log(data.data.Login.role)

        console.log('berhasil')
        this.loginForm.reset();


        Swal.fire({
          icon: 'success',
          title: "Hello " + data?.data?.Login?.role,
          text: 'Welcome to our Restaurant' 
          
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
        title: "Error",
        text: "Data not Completed",
      });
    }
  }

}
