import { Action } from '@ngrx/store';
import { MenuItem } from 'primeng/api';

export enum MenuActionTypes {
    Load = '[Menu] LOAD',
    Load_Success = '[Menu] LOAD_SUCCESS',
    Load_Failure = '[Menu] LOAD_FAILURE'
}

export class MenuLoadAction implements Action {
    readonly type = MenuActionTypes.Load;

    constructor() { }
}

export class MenuLoadSuccessAction implements Action {
    readonly type = MenuActionTypes.Load_Success;

    constructor(public payload: MenuItem[]) { }
}

export class MenuLoadFailureAction implements Action {
    readonly type = MenuActionTypes.Load_Failure;

    constructor(public payload: Error) { }
}

export type MenuActions =
    MenuLoadAction |
    MenuLoadSuccessAction |
    MenuLoadFailureAction;
