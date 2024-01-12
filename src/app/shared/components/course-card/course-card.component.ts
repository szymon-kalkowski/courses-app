import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ReadAuthor } from 'src/app/models/author/ReadAuthor.model';
import { ReadCourse } from 'src/app/models/course/ReadCourse.model';
import { CoursesService } from 'src/app/services/courses.service';
import { UserService } from 'src/app/user/services/user.service';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss'],
})
export class CourseCardComponent {
  @Input() course: ReadCourse = {} as ReadCourse;
  @Input() editable: boolean = false;
  @Input() details: boolean = false;

  allAuthors: ReadAuthor[] = [];
  authors: ReadAuthor[] = [];

  constructor(private coursesService: CoursesService) {
    this.coursesService.getAllAuthors().subscribe((response) => {
      this.allAuthors = response.result as ReadAuthor[];
      this.authors = this.allAuthors.filter((author) =>
        this.course.authors.includes(author.id)
      );
    });
  }
  editIcon = faEdit;
  deleteIcon = faTrash;

  onDelete(): void {
    this.coursesService.deleteCourse(this.course.id).subscribe((response) => {
      window.location.reload();
    });
  }
}
