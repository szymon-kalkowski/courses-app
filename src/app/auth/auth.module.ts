import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionStorageService } from './services/session-storage.service';
import { AuthorizedGuard } from './guards/authorized.guard';
import { NotAuthorizedGuard } from './guards/not-authorized.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './interceptors/token.interceptor';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    SessionStorageService,
    AuthorizedGuard,
    NotAuthorizedGuard,
    {
      provide: 'WINDOW',
      useValue: window,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
})
export class AuthModule {}
