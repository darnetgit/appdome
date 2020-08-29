import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SmartInputComponent } from './components/smart-input/smart-input.component';
import { CharsContainerComponent } from './components/chars-container/chars-container.component';
import { AmazingCharComponent } from './components/amazing-char/amazing-char.component';

@NgModule({
  declarations: [
    AppComponent,
    SmartInputComponent,
    CharsContainerComponent,
    AmazingCharComponent
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
