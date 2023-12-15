import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './course.component';
import { CourseRoutingModule } from './course-routing.module';

@NgModule({
  declarations: [CourseComponent],
  imports: [CommonModule, CourseRoutingModule],
  exports: [CourseComponent],
})
export class CourseModule {}
