import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './features/courses/courses.component';
import { LoginComponent } from './features/login/login.component';
import { RegistrationComponent } from './features/registration/registration.component';
import { CourseFormComponent } from './shared/components';

const routes: Routes = [
  {
    path: '',
    component: CoursesComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  { path: 'registration', component: RegistrationComponent },
  {
    path: 'course-form',
    component: CourseFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
