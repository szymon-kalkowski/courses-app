import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { SessionStorageService } from './session-storage.service';

interface AuthBody {
  name?: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthorized$$ = new BehaviorSubject<boolean>(false);
  public isAuthorized$ = this.isAuthorized$$.asObservable();

  private apiUrl = 'http://localhost:4000';

  constructor(
    private http: HttpClient,
    private sessionStorageService: SessionStorageService
  ) {
    const token = this.sessionStorageService.getToken();
    if (token) {
      this.isAuthorized$$.next(true);
    }
  }

  login(body: AuthBody): Observable<any> {
    console.log('body', body);
    return this.http.post(this.apiUrl + '/login', body).pipe(
      tap((response: any) => {
        if (response.result) {
          this.sessionStorageService.setToken(response.result);
          this.isAuthorized$$.next(true);
        }
      })
    );
  }

  register(payload: AuthBody): Observable<any> {
    return this.http.post('/register', payload);
  }

  logout(): void {
    this.sessionStorageService.deleteToken();
    this.isAuthorized$$.next(false);
  }

  get isAuthorized(): boolean {
    return this.isAuthorized$$.value;
  }
}
