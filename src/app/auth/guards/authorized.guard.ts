import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable, map, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthorizedGuard implements CanLoad {
  constructor(private authService: AuthService, private router: Router) {}

  canLoad(
    _route: Route,
    _segments: UrlSegment[]
  ): Observable<boolean | UrlTree> {
    return this.authService.isAuthorized$.pipe(
      map((isAuthorized: boolean) =>
        isAuthorized ? true : this.router.createUrlTree(['/login'])
      )
    );
  }
}
