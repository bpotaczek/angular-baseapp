import { Action } from '@ngrx/store';
import { User } from '../../../shared/models';

export enum UserActionTypes {
    Load = '[User] LOAD',
    Load_Success = '[User] LOAD_SUCCESS',
    Load_Failure = '[User] LOAD_FAILURE',
    Update = '[User] UPDATE',
    Update_Success = '[User] UPDATE_SUCCESS',
    Update_Failure = '[User] UPDATE_FAILURE',
    Selected = '[User] SELECTED'
}

export class UserLoadAction implements Action {
    readonly type = UserActionTypes.Load;
    constructor() { }
}

export class UserLoadSuccessAction implements Action {
    readonly type = UserActionTypes.Load_Success;

    constructor(public payload: User[]) { }
}

export class UserLoadFailureAction implements Action {
    readonly type = UserActionTypes.Load_Failure;

    constructor(public payload: Error) { }
}

export class UserUpdateAction implements Action {
    readonly type = UserActionTypes.Update;
    constructor(public payload: User) { }
}

export class UserUpdateSuccessAction implements Action {
    readonly type = UserActionTypes.Update_Success;

    constructor(public payload: User) { }
}

export class UserUpdateFailureAction implements Action {
    readonly type = UserActionTypes.Update_Failure;

    constructor(public payload: Error) { }
}

export class UserSelectedAction implements Action {
    readonly type = UserActionTypes.Selected;

    constructor(public payload: string) { }
}

export type UserActions =
    UserLoadAction |
    UserLoadSuccessAction |
    UserLoadFailureAction |
    UserUpdateAction |
    UserUpdateSuccessAction |
    UserUpdateFailureAction |
    UserSelectedAction;
