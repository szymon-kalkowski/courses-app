import { ReadCourse } from 'src/app/models/course/ReadCourse.model';
import { createReducer, on, Action } from '@ngrx/store';
import * as CoursesActions from './courses.actions';

export const coursesFeatureKey = 'courses';

export interface CoursesState {
  allCourses: ReadCourse[];
  course: ReadCourse | null;
  isAllCoursesLoading: boolean;
  isSingleCourseLoading: boolean;
  isSearchState: boolean;
  errorMessage: string;
}

export const initialState: CoursesState = {
  allCourses: [],
  course: null,
  isAllCoursesLoading: false,
  isSingleCourseLoading: false,
  isSearchState: false,
  errorMessage: '',
};

export const _coursesReducer = createReducer(
  initialState,
  on(CoursesActions.requestAllCourses, (state) => ({
    ...state,
    isAllCoursesLoading: true,
    errorMessage: '',
  })),
  on(CoursesActions.requestAllCoursesSuccess, (state, { courses }) => ({
    ...state,
    allCourses: courses,
    isAllCoursesLoading: false,
  })),
  on(CoursesActions.requestAllCoursesFail, (state, { error }) => ({
    ...state,
    errorMessage: error,
    isAllCoursesLoading: false,
  })),
  on(CoursesActions.requestSingleCourse, (state) => ({
    ...state,
    isSingleCourseLoading: true,
    errorMessage: '',
  })),
  on(CoursesActions.requestSingleCourseSuccess, (state, { course }) => ({
    ...state,
    course,
    isSingleCourseLoading: false,
  })),
  on(CoursesActions.requestSingleCourseFail, (state, { error }) => ({
    ...state,
    errorMessage: error,
    isSingleCourseLoading: false,
  })),
  on(CoursesActions.requestFilteredCourses, (state) => ({
    ...state,
    isAllCoursesLoading: true,
    errorMessage: '',
  })),
  on(CoursesActions.requestFilteredCoursesSuccess, (state, { courses }) => ({
    ...state,
    allCourses: courses,
    isAllCoursesLoading: false,
    isSearchState: true,
  })),
  on(CoursesActions.requestFilteredCoursesFail, (state, { error }) => ({
    ...state,
    errorMessage: error,
    isAllCoursesLoading: false,
  })),
  on(CoursesActions.requestDeleteCourse, (state) => ({
    ...state,
    isAllCoursesLoading: true,
    errorMessage: '',
  })),
  on(CoursesActions.requestDeleteCourseSuccess, (state, { id }) => ({
    ...state,
    allCourses: state.allCourses.filter((course) => course.id !== id),
    isAllCoursesLoading: false,
  })),
  on(CoursesActions.requestDeleteCourseFail, (state, { error }) => ({
    ...state,
    errorMessage: error,
    isAllCoursesLoading: false,
  })),
  on(CoursesActions.requestCreateCourse, (state) => ({
    ...state,
    isAllCoursesLoading: true,
    errorMessage: '',
  })),
  on(CoursesActions.requestCreateCourseSuccess, (state, { course }) => ({
    ...state,
    allCourses: [...state.allCourses, course],
    isAllCoursesLoading: false,
  })),
  on(CoursesActions.requestCreateCourseFail, (state, { error }) => ({
    ...state,
    errorMessage: error,
    isAllCoursesLoading: false,
  })),
  on(CoursesActions.requestEditCourse, (state) => ({
    ...state,
    isAllCoursesLoading: true,
    errorMessage: '',
  })),
  on(CoursesActions.requestEditCourseSuccess, (state, { course }) => ({
    ...state,
    allCourses: state.allCourses.map((c) => (c.id === course.id ? course : c)),
    isAllCoursesLoading: false,
  })),
  on(CoursesActions.requestEditCourseFail, (state, { error }) => ({
    ...state,
    errorMessage: error,
    isAllCoursesLoading: false,
  }))
);

export const coursesReducer = (
  state: CoursesState | undefined,
  action: Action
): CoursesState => _coursesReducer(state, action);
