import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, map } from 'rxjs';
import { UserService } from '../services/user.service';
import { ReadUser } from 'src/app/models/user/ReadUser.model';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}
  canActivate(
    _route: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> {
    return this.userService.getUser().pipe(
      map((user) => {
        return user.result.role === 'admin'
          ? true
          : this.router.createUrlTree(['/courses']);
      })
    );
  }
}
