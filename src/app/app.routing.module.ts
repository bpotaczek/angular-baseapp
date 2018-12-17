import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from '@kbxl-lib/core';
import { HomeComponent } from './core/components/home.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}
