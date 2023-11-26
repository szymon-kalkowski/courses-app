import { Component, Input } from '@angular/core';
import { Course } from 'src/app/types';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
})
export class CourseListComponent {
  @Input() courses: Course[] = [];
  @Input() editable: boolean = false;
  faEdit = faEdit;
  faDelete = faTrash;
}
