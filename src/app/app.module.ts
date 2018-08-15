import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ChessboardComponent } from './chessboard/chessboard.component';

import { ActionService } from './services/action.service'



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ChessboardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ActionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
