import { Component, Input } from '@angular/core';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { ReadCourse } from 'src/app/models/course/ReadCourse.model';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
})
export class CourseListComponent {
  @Input() courses: ReadCourse[] = [];
  @Input() editable: boolean = false;
  faEdit = faEdit;
  faDelete = faTrash;
}
