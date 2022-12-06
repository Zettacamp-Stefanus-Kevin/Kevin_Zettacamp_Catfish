import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from "@ngx-translate/core";
import Swal from 'sweetalert2';
import { SubSink } from 'subsink';
import { CartService } from './cart/cart.service';
import { ProfilService } from './profil/profil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selectedLang = 'en';
  private subs = new SubSink();

  title = 'angular_material';
  token: string | null = "";
  role: string | null = "";
  name: any;
  data: any;
  email:any;

  cartLength : any


  constructor(private router: Router,
    private translate: TranslateService,
    private cartService : CartService,
    private profilService: ProfilService) { }

  ngOnInit() {
    this.init();
    this.getBadge();
    this.balance();
  }

  init() {
    if (localStorage.getItem('getToken') !== null) {
      this.token = localStorage.getItem('getToken')
      this.role = localStorage.getItem('userData')
      this.name = localStorage.getItem('name')
    }
  }

  onLogout() {
    Swal.fire({
      icon: "warning",
      title: this.translate.instant("Are you sure?"),
      text: this.translate.instant("are you sure to exit?"),
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: this.translate.instant("Yes, exit now"),
      cancelButtonText : this.translate.instant("Cancel")
    }).then((result) =>{
      if (result.isConfirmed){
        Swal.fire({
          icon : "success",
          title : this.translate.instant("Thank for Coming")
        }).then((result)=>{
          localStorage.removeItem('getToken');
          localStorage.removeItem('userData');
          localStorage.removeItem('name');
          localStorage.removeItem('email');
          this.router.navigate(['login']).then(()=>{
            window.location.reload()
          })
        })
      }
    })
  }

  setLanguage(lang: string) {
    this.translate.use(lang);
  }


  getBadge() {
    this.subs.sink = this.cartService?.getCart()?.valueChanges?.subscribe((item: any) => {
      this.cartLength = item?.data?.GetOrder?.menu?.length
      console.log(item);
    });
    console.log(this.cartLength);
  }

  balance(){
    this.email = localStorage.getItem('email')
    this.subs.sink = this.profilService.getUser(this.email).valueChanges.subscribe((resp: any) => {
      this.data = resp?.data?.GetOneUser
    })
  }
 

}



