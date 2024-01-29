import { Component } from '@angular/core';
import { UserService } from 'src/app/user/services/user.service';
import { CoursesFacade } from 'src/app/store/courses/courses.facade';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent {
  allCourses$ = this.coursesFacade.allCourses$;
  searchedBy: string = '';

  public editable: boolean = false;

  constructor(
    private coursesFacade: CoursesFacade,
    private userService: UserService
  ) {
    this.coursesFacade.getAllCourses();
    this.userService.getUser().subscribe((response) => {
      this.editable = response.result.role === 'admin';
    });
  }

  onSearch(search: string): void {
    this.coursesFacade.getFilteredCourses(search);
    this.searchedBy = search;
  }

  clearSearch(): void {
    this.coursesFacade.getAllCourses();
    this.searchedBy = '';
  }
}
