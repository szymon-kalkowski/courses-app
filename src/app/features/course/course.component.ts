import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesFacade } from 'src/app/store/courses/courses.facade';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
})
export class CourseComponent {
  id: string = '';
  course$ = this.coursesFacade.course$;

  constructor(
    private route: ActivatedRoute,
    private coursesFacade: CoursesFacade
  ) {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      this.coursesFacade.getSingleCourse(this.id);
    });
  }
}
