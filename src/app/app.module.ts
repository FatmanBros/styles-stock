import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToggleComponent } from './component/checkbox/toggle/toggle.component';
import { TopComponent } from './component/top/top.component';

@NgModule({
  declarations: [
    AppComponent,
    ToggleComponent,
    TopComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
