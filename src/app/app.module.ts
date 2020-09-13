import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from './component/ui/dialog/dialog.component';
import { TopComponent } from './component/view/top/top.component';
import { ToggleSwitchComponent } from './component/view/checkbox/toggle-switch/toggle-switch.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { OverlayModule } from '@angular/cdk/overlay';
import { DesignButtonComponent } from './component/view/button/design-button/design-button.component';
import { GroupComponent } from './component/view/group/group.component';
import { LoadButtonComponent } from './component/view/button/load-button/load-button.component';
import { HoverEffectsComponent } from './component/view/button/hover-effects/hover-effects.component';

@NgModule({
  declarations: [
    AppComponent,
    ToggleSwitchComponent,
    TopComponent,
    DialogComponent,
    DesignButtonComponent,
    GroupComponent,
    LoadButtonComponent,
    HoverEffectsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatDialogModule,
    BrowserAnimationsModule,
    OverlayModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
