import { Injectable } from '@angular/core';
import * as CoursesActions from './courses.actions';
import * as CoursesSelectors from './courses.selectors';
import { Store, select } from '@ngrx/store';
import { State } from '..';
import { WriteCourse } from 'src/app/models/course/WriteCourse.model';

@Injectable({ providedIn: 'root' })
export class CoursesFacade {
  isAllCoursesLoading$ = this.store.pipe(
    select(CoursesSelectors.isAllCoursesLoadingSelector)
  );
  isSingleCourseLoading$ = this.store.pipe(
    select(CoursesSelectors.isSingleCourseLoadingSelector)
  );
  isSearchState$ = this.store.pipe(
    select(CoursesSelectors.isSearchStateSelector)
  );
  allCourses$ = this.store.pipe(select(CoursesSelectors.getAllCourses));
  course$ = this.store.pipe(select(CoursesSelectors.getCourse));
  errorMessage$ = this.store.pipe(select(CoursesSelectors.getErrorMessage));

  constructor(private store: Store<State>) {}

  getAllCourses(): void {
    this.store.dispatch(CoursesActions.requestAllCourses());
  }

  getSingleCourse(id: string): void {
    this.store.dispatch(CoursesActions.requestSingleCourse({ id }));
  }

  getFilteredCourses(search: string): void {
    this.store.dispatch(CoursesActions.requestFilteredCourses({ search }));
  }

  editCourse(id: string, course: WriteCourse): void {
    this.store.dispatch(CoursesActions.requestEditCourse({ id, course }));
  }

  createCourse(course: WriteCourse): void {
    this.store.dispatch(CoursesActions.requestCreateCourse({ course }));
  }

  deleteCourse(id: string): void {
    this.store.dispatch(CoursesActions.requestDeleteCourse({ id }));
  }
}
