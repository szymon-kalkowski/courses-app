import { Component } from '@angular/core';
import { Course } from 'src/app/types';
import {
  mockedCoursesList,
  mockedAuthorsList,
} from 'src/app/shared/mocks/mock';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent {
  courses: Course[] = [];

  constructor() {
    this.courses = mockedCoursesList.map((course) => {
      return {
        ...course,
        authors: mockedAuthorsList.filter((author) =>
          course.authors.includes(author.id)
        ),
      };
    });
  }
}
