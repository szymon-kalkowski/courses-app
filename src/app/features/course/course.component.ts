import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReadCourse } from 'src/app/models/course/ReadCourse.model';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
})
export class CourseComponent {
  id: string = '';
  course: ReadCourse = {} as ReadCourse;

  constructor(
    private route: ActivatedRoute,
    private coursesService: CoursesService
  ) {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      this.coursesService.getCourse(this.id).subscribe((course) => {
        this.course = course.result as ReadCourse;
      });
    });
  }
}
