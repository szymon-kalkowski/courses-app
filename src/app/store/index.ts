import { ActionReducerMap } from '@ngrx/store';
import { CoursesState, coursesReducer } from './courses/courses.reducer';
import { coursesFeatureKey } from './courses/courses.reducer';
import { CoursesEffects } from './courses/courses.effects';

export interface State {
  [coursesFeatureKey]: CoursesState;
}

export const reducers: ActionReducerMap<State> = {
  [coursesFeatureKey]: coursesReducer,
};

export const effects = [CoursesEffects];
