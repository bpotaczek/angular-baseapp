import { Injectable } from '@angular/core';

import { Observable, of, interval } from 'rxjs';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { map, switchMap, catchError, tap } from 'rxjs/operators';

import {
    UserActionTypes,
    UserLoadAction,
    UserLoadFailureAction,
    UserLoadSuccessAction,
    UserUpdateAction,
    UserUpdateSuccessAction,
    UserUpdateFailureAction,
    UserSelectedAction
} from '../actions';

import { PostService } from '../../services';
import { mapToPayload } from '@kbxl-lib/shared';
import { AuthLoginActionTypes, AuthLoginSuccessAction } from '@kbxl-lib/core';
import { User } from '../../../shared/models';

import { MessageService } from 'primeng/components/common/messageservice';

@Injectable()
export class PostEffects {

    @Effect()
    $load: Observable<Action> = this.actions$.pipe(
        ofType<UserLoadAction>(UserActionTypes.Load),
        switchMap(() => {
            return this.userService.getUsers().pipe(
                map((data) => new UserLoadSuccessAction(data)),
                catchError((err) => of(new UserLoadFailureAction(err)))
            );
        })
    );

    @Effect()
    $update: Observable<Action> = this.actions$.pipe(
        ofType<UserUpdateAction>(UserActionTypes.Update),
        map(x => x.payload),
        switchMap((user: User) => {
            return this.userService.updateUser(user).pipe(
                map((data) => new UserUpdateSuccessAction(data)),
                catchError((err) => of(new UserUpdateFailureAction(err)))
            );
        })
    );

    @Effect({ dispatch: false })
    $selected: Observable<Action> = this.actions$.pipe(
        ofType<UserSelectedAction>(UserActionTypes.Selected),
        tap(x => console.log(x))
    );

    @Effect()
    $startup: Observable<Action> = this.actions$.pipe(
        ofType<AuthLoginSuccessAction>(AuthLoginActionTypes.Login_Success),
        switchMap(() => {
            return this.userService.getUsers().pipe(
                map((data) => new UserLoadSuccessAction(data)),
                catchError((err) => of(new UserLoadFailureAction(err)))
            );
        })
    );

    constructor(private actions$: Actions, private userService: PostService) { }
}
