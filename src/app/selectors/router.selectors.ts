import * as fromRouter from '@ngrx/router-store';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface State {
  router: fromRouter.RouterReducerState<any>;
}

export const selectRouter = createFeatureSelector<
  State,
  fromRouter.RouterReducerState<any>
>('router');

export const { selectUrl } = fromRouter.getSelectors(selectRouter);
