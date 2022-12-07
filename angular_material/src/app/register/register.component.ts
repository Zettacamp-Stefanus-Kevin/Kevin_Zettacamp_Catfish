import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from './register.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  hide = true

  constructor(private registerService : RegisterService,
    private router : Router,
    private translate : TranslateService) { }

  registerForm: any = new FormGroup({
    firstName: new FormControl(null, [Validators.required]),
    lastName: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required,Validators.email]),
    password: new FormControl(null,[Validators.required])
  });


  ngOnInit(): void {

  }

  onSubmit(){
 if (this.registerForm.valid) {
      this.registerService.setRegister(this.registerForm.value)
      console.log('berhasil');
      Swal.fire({
        icon: 'success',
        title: this.translate.instant("Success"),
        text: this.translate.instant("Your work has been saved"),
      }).then(()=>{
        this.router.navigate(['homepage']).then(() => {
          window.location.reload()
        })
      });
      // this.registerService.promoCard().refetch()

    } else {
      console.log('gagal');
      Swal.fire({
        icon: 'error',
        title: this.translate.instant("Failed"),
        text: this.translate.instant("Try again"),
      });
      
      this.registerForm.markAllAsTouched();
    }
  }

  getErrorMessage(){
    if (this.registerForm.get('email').hasError('required')) {
      return 'You must input your email';
    }
    return this.registerForm.get('email').hasError('email') ? 'Not a valid email' : '';
  }

}
