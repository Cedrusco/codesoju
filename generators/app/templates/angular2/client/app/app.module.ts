import { NgModule }               from '@angular/core';
import { BrowserModule }          from '@angular/platform-browser';
import { FormsModule }            from '@angular/forms';
import { HttpModule }             from '@angular/http';
import { MaterialModule }         from '@angular/material';
import {ChartsModule}							from 'ng2-charts/ng2-charts';

import { AppComponent }           from './app.component';
import { appRouterProviders }     from './app.routes';


@NgModule({
  imports: [
    BrowserModule,
    MaterialModule.forRoot(),
    ChartsModule,
    HttpModule,
    FormsModule,
    appRouterProviders
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
