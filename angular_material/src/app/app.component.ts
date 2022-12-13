import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { SubSink } from 'subsink';
import { CartService } from './cart/cart.service';
import { ProfilService } from './profil/profil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  selectedLang = 'en';
  private subs = new SubSink();

  title = 'angular_material';
  public token: string | null = '';
  public role: string | null = '';
  public name: any;
  public data: any;
  public email: any;
  public balance: any;

  cartLength: any;

  constructor(
    private router: Router,
    private translate: TranslateService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.init();
    if (localStorage.getItem('getToken')) {
      this.getBadge();
    }
  }

  init() {
    if (localStorage.getItem('getToken') !== null) {
      this.token = localStorage.getItem('getToken');
      this.role = localStorage.getItem('userData');
      this.name = localStorage.getItem('name');
      this.balance = localStorage.getItem('balance');
    }
  }

  onLogout() {
    Swal.fire({
      icon: 'warning',
      title: this.translate.instant('Are you sure?'),
      text: this.translate.instant('are you sure to exit?'),
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: this.translate.instant('Yes, exit now'),
      cancelButtonText: this.translate.instant('Cancel'),
    }).then((result) => {
      if (result.isConfirmed) {
        this.role = '';
        this.token = '';
        this.name = '';
        Swal.fire({
          icon: 'success',
          title: this.translate.instant('Thank for Coming'),
        }).then(() => {
          localStorage.clear();
          this.router.navigate(['login']);
        });
      }
    });
  }

  setLanguage(lang: string) {
    this.translate.use(lang);
  }

  public getBadge() {
    this.subs.sink = this.cartService?.getCart()?.valueChanges?.subscribe(
      (item: any) => {
        this.cartLength = item?.data?.GetOrder?.menu?.length;
      },
      () => {}
    );
  }
}
