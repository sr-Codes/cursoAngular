import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor( private router: Router, private session: SessionService) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    console.log(next.url.join());
    if (next.url.join() === 'products') {
      if (!this.session.validSession()) {
        return this.router.parseUrl('/login');
      }
    }
    console.log('--->' + next.url.join());
    return true;
  }
}
