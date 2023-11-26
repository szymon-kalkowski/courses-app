import { Component, Input } from '@angular/core';
import { Course } from 'src/app/types';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss'],
})
export class CourseCardComponent {
  @Input() course: Course = {} as Course;
  @Input() editable: boolean = false;
  editIcon = faEdit;
  deleteIcon = faTrash;
}
