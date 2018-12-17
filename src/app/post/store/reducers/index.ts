
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { PostState, PostReducer } from './post.reducer';

export interface PostFeatureState {
    post: PostState;
}

export const reducers: ActionReducerMap<PostFeatureState> = {
    post: PostReducer
};

export const getPostFeatureState = createFeatureSelector<PostFeatureState>('post');
