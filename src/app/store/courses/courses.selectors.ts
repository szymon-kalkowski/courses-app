import { createSelector, createFeatureSelector } from '@ngrx/store';
import { CoursesState, coursesFeatureKey } from './courses.reducer';
import { State } from '..';

export const selectCourses = createFeatureSelector<State, CoursesState>(
  coursesFeatureKey
);

export const getAllCourses = createSelector(
  selectCourses,
  (state: CoursesState) => state.allCourses
);

export const getCourses = createSelector(
  selectCourses,
  (state: CoursesState) => state.allCourses
);

export const getCourse = createSelector(
  selectCourses,
  (state: CoursesState) => state.course
);

export const getErrorMessage = createSelector(
  selectCourses,
  (state: CoursesState) => state.errorMessage
);

export const isAllCoursesLoadingSelector = createSelector(
  selectCourses,
  (state: CoursesState) => state.isAllCoursesLoading
);

export const isSingleCourseLoadingSelector = createSelector(
  selectCourses,
  (state: CoursesState) => state.isSingleCourseLoading
);

export const isSearchStateSelector = createSelector(
  selectCourses,
  (state: CoursesState) => state.isSearchState
);
