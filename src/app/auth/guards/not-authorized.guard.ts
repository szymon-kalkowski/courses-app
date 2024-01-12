import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, map, switchMap, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class NotAuthorizedGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(
    _route: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> {
    return this.authService.isAuthorized$.pipe(
      map((isAuthorized: boolean) => {
        return !isAuthorized ? true : this.router.createUrlTree(['/courses']);
      })
    );
  }
}
