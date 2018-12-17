import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { PostRoutingModule } from './post.routing.module';
import { SharedModule } from '../shared/shared.module';

import { effects, reducers } from './store';
import { PostService } from './services';

import { PostComponent, PostListContainerComponent, PostListItemComponent } from './components';

@NgModule({
    imports: [
        PostRoutingModule,
        SharedModule,
        EffectsModule.forFeature(effects),
        StoreModule.forFeature('post', reducers),
    ],
    declarations: [
        PostComponent,
        PostListContainerComponent,
        PostListItemComponent
    ],
    providers: [
        PostService
    ]
})
export class PostModule { }
