import { createSelector } from '@ngrx/store';

import { CoreState } from '../reducers';
import { getLoading, getLoaded, selectors } from '../reducers/menu.reducer';

export const getMenuState = (state: CoreState) => state.menu;
export const getMenuLoading = createSelector(getMenuState, getLoading);
export const getMenuLoaded = createSelector(getMenuState, getLoaded);

// EntityState<MenuItem> is stored as a dictionary so we first create a
// query to get the dictionary (export here not needed since we only use this here)
const getMenuEntityDict = createSelector(getMenuState, selectors.selectEntities);

// then use that dictionary selector to create an array query
export const getMenuEntities = createSelector(getMenuEntityDict, (m) => {
  return Object.keys(m).map(y => m[y]);
});
