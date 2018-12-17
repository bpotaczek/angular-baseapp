import { createSelector } from '@ngrx/store';

// Get state from reducers
import { UserFeatureState, getUserFeatureState } from '../reducers';
import { selectors, getLoading, getLoaded, getSelectedId } from '../reducers/user.reducer';

/*
** Selectors are composable and build on one other. Start with the base state and
** select more and more specific properties on the state. This way each selector can
** be reused multiple times.

** You could get the selected user in one call but less flexible.
** Example (don't do):

export const getSelectedUser = createSelector(getUserFeatureState, (state: UserFeatureState) => {
    return state.user.entities[state.user.selectUserId];
});

*/

// Create selector to get base user state
const getUserState = createSelector(getUserFeatureState, (state: UserFeatureState) => {
    return state.user;
});
// *Note: These could be written in longer format too
/*

const getUserState = createSelector(getUserFeatureState, function(state: UserFeatureState) {
    return state.user;
});

*/

// Use state selector to create selector to get dictionary of users
// This uses the built in selector from the ngrx/entity lib
const getUserEntitiesDict = createSelector(getUserState, selectors.selectEntities);

// Use that dictionary selector to create selector that returns an array
export const getUserEntities = createSelector(getUserEntitiesDict, (x) => {
    return Object.keys(x).map(y => x[y]);
});

// Use state selector to create selector of the "selected" id
export const getSelectedUserId = createSelector(getUserState, getSelectedId);

// Use dictionary selector and "selected" selector to return appropriate object
export const getSelectedUser = createSelector(getUserEntitiesDict, getSelectedUserId, (users, selectedId) => {
    return users[selectedId];
});

// Create selectors for loading statuses so we can bind to a loading spinner if wanted (optional)
export const getExampleLoading = createSelector(getUserState, getLoading);
export const getExampleLoaded = createSelector(getUserState, getLoaded);
