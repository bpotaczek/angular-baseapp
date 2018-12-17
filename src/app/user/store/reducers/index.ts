
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { UserState, UserReducer } from './user.reducer';

export interface UserFeatureState {
    user: UserState;
}

export const reducers: ActionReducerMap<UserFeatureState> = {
    user: UserReducer
};

export const getUserFeatureState = createFeatureSelector<UserFeatureState>('user');
