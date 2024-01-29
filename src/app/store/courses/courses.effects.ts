import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CoursesService } from 'src/app/services/courses.service';
import * as CoursesActions from './courses.actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { ReadCourse } from 'src/app/models/course/ReadCourse.model';
import { Router } from '@angular/router';

@Injectable()
export class CoursesEffects {
  getAll$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CoursesActions.requestAllCourses),
      switchMap(() =>
        this.coursesService.getAll().pipe(
          map((response) =>
            CoursesActions.requestAllCoursesSuccess({
              courses: response.result as ReadCourse[],
            })
          ),
          catchError((error) =>
            of(CoursesActions.requestAllCoursesFail({ error: error }))
          )
        )
      )
    )
  );

  filteredCourses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CoursesActions.requestFilteredCourses),
      switchMap(({ search }) =>
        this.coursesService.filterCourses({ title: [search] }).pipe(
          map((response) =>
            CoursesActions.requestFilteredCoursesSuccess({
              courses: response.result as ReadCourse[],
            })
          ),
          catchError((error) =>
            of(CoursesActions.requestFilteredCoursesFail({ error: error }))
          )
        )
      )
    )
  );

  getSpecificCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CoursesActions.requestSingleCourse),
      switchMap(({ id }) =>
        this.coursesService.getCourse(id).pipe(
          map((response) =>
            CoursesActions.requestSingleCourseSuccess({
              course: response.result as ReadCourse,
            })
          ),
          catchError((error) =>
            of(CoursesActions.requestSingleCourseFail({ error: error }))
          )
        )
      )
    )
  );

  deleteCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CoursesActions.requestDeleteCourse),
      switchMap(({ id }) =>
        this.coursesService.deleteCourse(id).pipe(
          map(() => CoursesActions.requestDeleteCourseSuccess({ id: id })),
          catchError((error) =>
            of(CoursesActions.requestDeleteCourseFail({ error: error }))
          )
        )
      )
    )
  );

  editCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CoursesActions.requestEditCourse),
      switchMap(({ id, course }) =>
        this.coursesService.editCourse(id, course).pipe(
          map((response) =>
            CoursesActions.requestEditCourseSuccess({
              course: response.result as ReadCourse,
            })
          ),
          catchError((error) =>
            of(CoursesActions.requestEditCourseFail({ error: error }))
          )
        )
      )
    )
  );

  createCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CoursesActions.requestCreateCourse),
      switchMap(({ course }) =>
        this.coursesService.createCourse(course).pipe(
          map((response) =>
            CoursesActions.requestCreateCourseSuccess({
              course: response.result as ReadCourse,
            })
          ),
          catchError((error) =>
            of(CoursesActions.requestCreateCourseFail({ error: error }))
          )
        )
      )
    )
  );

  redirectToTheCoursesPage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          CoursesActions.requestCreateCourseSuccess,
          CoursesActions.requestEditCourseSuccess,
          CoursesActions.requestDeleteCourseSuccess
        ),
        map(() => this.router.navigate(['/courses']))
      ),
    { dispatch: false }
  );

  constructor(
    private coursesService: CoursesService,
    private actions$: Actions,
    private router: Router
  ) {}
}
