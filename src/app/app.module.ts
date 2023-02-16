import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Component2Component } from './components/component2/component2.component';
import { Directive1Directive } from './directives/directive1.directive';
import { Pipe2Pipe } from './pipes/pipe2.pipe';
import { Component3Component } from './components/component3/component3.component';
import { Component4Component } from './components/component4/component4.component';

@NgModule({
  declarations: [
    AppComponent,
    Component2Component,
    Directive1Directive,
    Pipe2Pipe,
    Component3Component,
    Component4Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
