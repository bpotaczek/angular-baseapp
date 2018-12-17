import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AuthGuard } from '@kbxl-lib/core';
import { PostListContainerComponent, PostComponent } from './components';

const routes: Routes = [
    {
        path: 'posts',
        component: PostComponent,
        canActivate: [AuthGuard],
        children: [
            { path: 'list', component: PostListContainerComponent },
        ]
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class PostRoutingModule {}
