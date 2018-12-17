import { Injectable } from '@angular/core';

import { Observable, of, defer } from 'rxjs';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { CommonService } from '../../services';
import {
    MenuActionTypes,
    MenuLoadAction,
    MenuLoadFailureAction,
    MenuLoadSuccessAction
} from '../actions';
import { map, switchMap, catchError } from 'rxjs/operators';

@Injectable()
export class MenuEffects {

    @Effect()
    $load: Observable<Action> = this.actions$.pipe(
        ofType(MenuActionTypes.Load),
        switchMap(() => {
            return this.menuService.getMenuItems().pipe(
                map(data => {
                    return new MenuLoadSuccessAction(data);
                }),
                catchError((err) => {
                    return of(new MenuLoadFailureAction(err));
                })
            );
        })
    );

    @Effect()
    $startup: Observable<Action> = defer(() => {
        return of(new MenuLoadAction());
    });

    constructor(private menuService: CommonService, private actions$: Actions) { }
}
