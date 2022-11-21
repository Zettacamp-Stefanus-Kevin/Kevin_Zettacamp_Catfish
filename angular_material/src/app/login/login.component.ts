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
  }

  onSubmit(loginForm: any) {
    if (this.loginForm.valid) {
      this.subs.sink = this.loginService.getToken(loginForm).subscribe((data) => {
        console.log(data.data.Login.token)
        console.log(data.data.Login.email)
        console.log(data.data.Login.role)
        let adminToken = data.data.Login.token;
        
        localStorage.setItem('getToken', adminToken);
        localStorage.setItem('userData', data.data.Login.role);

        console.log('berhasil')
        this.loginForm.reset();


        Swal.fire({
          icon: 'success',
          text: 'Data Complete',
          title: "Success"
        });
        this.router.navigate(['homepage']).then(() => {
          window.location.reload()
        })
      })


    } else {
      console.log('gagal');
      Swal.fire({
        icon: 'error',
        text: "Data not Completed",
        title: "Error"
      });
    }
  }

}
