import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses.component';
import { CourseFormComponent } from 'src/app/shared/components';
import { AdminGuard } from 'src/app/user/guards/admin.guard';
import { CourseComponent } from '../course/course.component';

const routes: Routes = [
  {
    path: '',
    component: CoursesComponent,
  },
  {
    path: 'add',
    component: CourseFormComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'edit/:id',
    component: CourseFormComponent,
    canActivate: [AdminGuard],
  },
  {
    path: ':id',
    component: CourseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursesRoutingModule {}
