import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { UserService } from './user.service';
import { ReadUser } from 'src/app/models/user/ReadUser.model';

@Injectable({
  providedIn: 'root',
})
export class UserStoreService {
  private name$$ = new BehaviorSubject<string>('');
  private isAdmin$$ = new BehaviorSubject<boolean>(false);

  name$ = this.name$$.asObservable();
  isAdmin$ = this.isAdmin$$.asObservable();

  constructor(private userService: UserService) {
    this.userService.getUser().subscribe(
      (response) => {
        const user = response.result;
        this.name$$.next(user.name);
        this.isAdmin$$.next(user.role === 'admin');
      },
      (error) => console.error('Error fetching user details', error)
    );
  }
}
