import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OpenComponent } from './open/open.component';
import { ClosedComponent } from './closed/closed.component';

@NgModule({
  declarations: [
    AppComponent,
    OpenComponent,
    ClosedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
