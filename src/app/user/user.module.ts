import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { UserRoutingModule } from './user.routing.module';
import { SharedModule } from '../shared/shared.module';

import { effects, reducers } from './store';
import { UserService } from './services';

import {
    UserComponent,
    UserProfileContainerComponent,
    UserProfileComponent,
    UserListContainerComponent,
    UserListItemComponent
} from './components';

@NgModule({
    imports: [
        UserRoutingModule,
        SharedModule,
        EffectsModule.forFeature(effects),
        StoreModule.forFeature('user', reducers),
    ],
    declarations: [
        UserComponent,
        UserProfileContainerComponent,
        UserProfileComponent,
        UserListContainerComponent,
        UserListItemComponent
    ],
    providers: [
        UserService
    ]
})
export class UserModule { }
