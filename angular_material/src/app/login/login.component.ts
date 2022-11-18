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
        let user_type = data.data.Login.user_type;
        for(let data of user_type){
          data.routing = data.name
        }
        console.log(user_type)
        localStorage.setItem('getToken', adminToken);
        localStorage.setItem('userData', JSON.stringify(user_type));
      })
 
      console.log('berhasil')
      this.loginForm.reset();
      this.router.navigate(['homepage'])

      Swal.fire({
        icon: 'success',
        text: 'Data Complete',
        title: "Success"
      });
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
