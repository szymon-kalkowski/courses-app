import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoursesRoutingModule } from './courses-routing.module';
import { CourseComponent } from '../course/course.component';

@NgModule({
  declarations: [CoursesComponent, CourseComponent],
  imports: [CommonModule, SharedModule, CoursesRoutingModule],
  exports: [CoursesComponent],
})
export class CoursesModule {}
