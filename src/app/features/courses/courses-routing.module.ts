import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses.component';
import { CourseFormComponent } from 'src/app/shared/components';

const routes: Routes = [
  {
    path: '',
    component: CoursesComponent,
  },
  {
    path: 'add',
    component: CourseFormComponent,
  },
  {
    path: 'edit/:id',
    component: CourseFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursesRoutingModule {}
