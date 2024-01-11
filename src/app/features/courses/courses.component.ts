import { Component } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';
import { ReadCourse } from 'src/app/models/course/ReadCourse.model';
import { UserService } from 'src/app/user/services/user.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent {
  courses: ReadCourse[] = [];

  public editable: boolean = false;

  constructor(
    private coursesService: CoursesService,
    private userService: UserService
  ) {
    this.coursesService.getAll().subscribe((response) => {
      this.courses = response.result as ReadCourse[];
    });
    this.userService.getUser().subscribe((response) => {
      this.editable = response.result.role === 'admin';
    });
  }
}
