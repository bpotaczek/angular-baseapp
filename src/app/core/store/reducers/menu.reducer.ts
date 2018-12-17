import { MenuActions, MenuActionTypes } from '../actions';
import { MenuItem } from 'primeng/api';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export interface MenuState extends EntityState<MenuItem> {
    loading: boolean;
    loaded: boolean;
}

export const adapter: EntityAdapter<MenuItem> = createEntityAdapter<MenuItem>({
    selectId: (x) => x.label
});

const initialState: MenuState = adapter.getInitialState({
    loading: false,
    loaded: false
});

export function menuReducer(state: MenuState = initialState, action: MenuActions): MenuState {
    switch (action.type) {
        case MenuActionTypes.Load: {
            return Object.assign({}, state, {
                loading: true
            });
        }
        case MenuActionTypes.Load_Success: {
            const data = action.payload;
            return adapter.addAll(data, state);
        }
        case MenuActionTypes.Load_Failure: {
            return Object.assign({}, state, {
                loading: false,
                loaded: false
            });
        }
        default:
            return state;
    }
}

export const getLoading = (state: MenuState) => state.loading;
export const getLoaded = (state: MenuState) => state.loaded;
export const selectors = adapter.getSelectors();
