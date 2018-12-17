// angular libs
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, APP_INITIALIZER } from '@angular/core';

// app  modules
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { KbxlCoreModule } from '@kbxl-lib/core';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';

// main component
import { AppComponent } from './app.component';

// routing
import { AppRoutingModule } from './app.routing.module';

// services and guards

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        // Core modules
        BrowserModule,
        BrowserAnimationsModule,

        // App Modules
        CoreModule,
        SharedModule,
        UserModule,
        PostModule,

        // routing modules
        AppRoutingModule,
        KbxlCoreModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
