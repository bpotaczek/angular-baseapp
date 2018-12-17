import { UserActionTypes, UserActions } from '../actions';
import { User } from '../../../shared/models';
import { EntityState, EntityAdapter, createEntityAdapter, Update } from '@ngrx/entity';

export interface PostState extends EntityState<User> {
    loaded: boolean;
    loading: boolean;
    selectUserId: string | null;
}

export const adapter: EntityAdapter<User> = createEntityAdapter<User>({
    selectId: (x) => x.id
});

const initialState: PostState = adapter.getInitialState({
    loaded: false,
    loading: false,
    selectUserId: null
});

export function PostReducer(state: PostState = initialState, action: UserActions): PostState {
    switch (action.type) {
        case UserActionTypes.Load: {
            return Object.assign({}, state, { loading: true });
        }
        case UserActionTypes.Load_Success: {
            return adapter.addAll(action.payload, { ...state, loading: false });
        }
        case UserActionTypes.Load_Failure: {
            return Object.assign({}, state, { loading: false });
        }
        case UserActionTypes.Update: {
            return Object.assign({}, state, { loading: true });
        }
        case UserActionTypes.Update_Success: {
            const update: Update<User> = {
                id: action.payload.id,
                changes: action.payload
            };
            return adapter.updateOne(update, { ...state, loading: false });
        }
        case UserActionTypes.Update_Failure: {
            return Object.assign({}, state, { loading: false });
        }
        case UserActionTypes.Selected: {
            return Object.assign({}, state, { selectUserId: action.payload });
        }
        default:
            return state;
    }
}

export const getLoaded = (state: PostState) => state.loaded;
export const getLoading = (state: PostState) => state.loading;
export const getSelectedId = (state: PostState) => state.selectUserId;
export const selectors = adapter.getSelectors();
