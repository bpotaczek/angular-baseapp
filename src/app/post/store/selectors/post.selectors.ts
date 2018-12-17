import { createSelector } from '@ngrx/store';

// Get state from reducers
import { PostFeatureState, getPostFeatureState } from '../reducers';
import { selectors, getLoading, getLoaded, getSelectedId } from '../reducers/post.reducer';

/*
** Selectors are composable and build on one other. Start with the base state and
** select more and more specific properties on the state. This way each selector can
** be reused multiple times.

** You could get the selected user in one call ~but less flexible.
** Example (don't do):

export const getSelectedUser = createSelector(getUserFeatureState, (state: UserFeatureState) => {
    return state.user.entities[state.user.selectUserId];
});

*/

// Create selector to get base user state
const getPostState = createSelector(getPostFeatureState, (state: PostFeatureState) => {
    return state.post;
});
// *Note: These could be written in longer format too
/*

const getUserState = createSelector(getUserFeatureState, function(state: UserFeatureState) {
    return state.user;
});

*/

// Use state selector to create selector to get dictionary of users
// This uses the built in selector from the ngrx/entity lib
const getPostEntitiesDict = createSelector(getPostState, selectors.selectEntities);

// Use that dictionary selector to create selector that returns an array
export const getPostEntities = createSelector(getPostEntitiesDict, (x) => {
    return Object.keys(x).map(y => x[y]);
});

// Use state selector to create selector of the "selected" id
export const getSelectedPostId = createSelector(getPostState, getSelectedId);

// Use dictionary selector and "selected" selector to return appropriate object
export const getSelectedPost = createSelector(getPostEntitiesDict, getSelectedPostId, (users, selectedId) => {
    return users[selectedId];
});

// Create selectors for loading statuses so we can bind to a loading spinner if wanted (optional)
export const getExampleLoading = createSelector(getPostState, getLoading);
export const getExampleLoaded = createSelector(getPostState, getLoaded);
