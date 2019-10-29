import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';


import { adminLteConf } from './admin-lte.conf';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';

import { LayoutModule } from 'angular-admin-lte';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';


import { LoadingPageModule, MaterialBarModule } from 'angular-loading-page';
import { BoxModule, BoxInfoModule as MkBoxInfoModule } from 'angular-admin-lte';
import { LoginComponent } from './login/login.component';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    LayoutModule.forRoot(adminLteConf),
    LoadingPageModule, MaterialBarModule,HttpClientModule,
    BoxModule,
    MkBoxInfoModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
