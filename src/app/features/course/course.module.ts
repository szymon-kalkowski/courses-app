import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './course.component';
import { CourseRoutingModule } from './course-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, CourseRoutingModule],
  exports: [],
})
export class CourseModule {}
