import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AuthGuard } from '@kbxl-lib/core';

import { UserComponent, UserProfileContainerComponent, UserListContainerComponent } from './components';

const routes: Routes = [
    {
        path: 'users',
        component: UserComponent,
        canActivate: [AuthGuard],
        children: [
            { path: 'list', component: UserListContainerComponent },
            { path: 'profile/:id', component: UserProfileContainerComponent }
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
export class UserRoutingModule {}
