import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RightPaneComponent } from './right-pane/right-pane.component';
import { LeftPaneComponent } from './left-pane/left-pane.component';

@NgModule({
  declarations: [
    AppComponent,
    RightPaneComponent,
    LeftPaneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
