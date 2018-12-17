
import { ActionReducerMap, ActionReducer, MetaReducer } from '@ngrx/store';

import { environment } from '../../../../environments/environment';
import { storeFreeze } from 'ngrx-store-freeze';

import { MenuState, menuReducer } from './menu.reducer';

export interface CoreState {
    menu: MenuState;
}

export const reducers: ActionReducerMap<CoreState> = {
    menu: menuReducer,
};

export function logger(reducer: ActionReducer<CoreState>): ActionReducer<CoreState> {
        return function(state: CoreState, action: any): CoreState {
          console.log('state', state);
          console.log('action', action);
          return reducer(state, action);
        };
      }

export const metaReducers: MetaReducer<CoreState>[] = !environment.production ? [logger] : [];
