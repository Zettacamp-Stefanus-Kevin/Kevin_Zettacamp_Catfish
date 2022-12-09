import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const token = localStorage.getItem('getToken');
    let role = localStorage.getItem('userData');

    if (token) {
      if (role == 'admin') {
        this.router.navigate(['homepage']);
        return false;
      } else {
        return true;
      }
    } else {
      this.router.navigate(['homepage']);
      return false;
    }
  }
}
