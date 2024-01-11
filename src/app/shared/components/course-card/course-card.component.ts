import { Component, Input } from '@angular/core';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ReadCourse } from 'src/app/models/course/ReadCourse.model';
import { UserService } from 'src/app/user/services/user.service';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss'],
})
export class CourseCardComponent {
  @Input() course: ReadCourse = {} as ReadCourse;
  @Input() editable: boolean = false;

  editIcon = faEdit;
  deleteIcon = faTrash;
}
