import { UserActionTypes, UserActions } from '../actions';
import { User } from '../../../shared/models';
import { EntityState, EntityAdapter, createEntityAdapter, Update } from '@ngrx/entity';

export interface UserState extends EntityState<User> {
    loaded: boolean;
    loading: boolean;
    selectUserId: string | null;
}

export const adapter: EntityAdapter<User> = createEntityAdapter<User>({
    selectId: (x) => x.id
});

const initialState: UserState = adapter.getInitialState({
    loaded: false,
    loading: false,
    selectUserId: null
});

export function UserReducer(state: UserState = initialState, action: UserActions): UserState {
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

export const getLoaded = (state: UserState) => state.loaded;
export const getLoading = (state: UserState) => state.loading;
export const getSelectedId = (state: UserState) => state.selectUserId;
export const selectors = adapter.getSelectors();
