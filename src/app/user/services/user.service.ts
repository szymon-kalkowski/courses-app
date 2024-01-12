import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReadUser } from 'src/app/models/user/ReadUser.model';

interface UserResponse {
  readonly successful: boolean;
  readonly result: ReadUser;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUser(): Observable<UserResponse> {
    return this.http.get<UserResponse>('http://localhost:4000/users/me');
  }
}
