import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { SharedModule } from '../shared/shared.module';
import { KbxlCoreModule, ENVIRONMENTSETTINGS, RequestInterceptor } from '@kbxl-lib/core';

import { reducers, metaReducers, effects } from './store';

import { environment } from '../../environments/environment';
import { CommonService, ErrorService } from './services';
import { ResponseInterceptor } from './services/response-intercepter';
import { HomeComponent } from './components/home.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    SharedModule,
    StoreModule.forRoot(reducers, { metaReducers: metaReducers }),
    EffectsModule.forRoot(effects),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    KbxlCoreModule.forRoot(environment)
  ],
  declarations: [
    HomeComponent
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: ErrorService
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ResponseInterceptor,
      multi: true
    },
    {
      provide: ENVIRONMENTSETTINGS,
      useValue: environment
    },
    CommonService
  ]
})
export class CoreModule { }
