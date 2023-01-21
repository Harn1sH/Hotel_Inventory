import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomlistComponent } from './rooms/roomlist/roomlist.component';
import { LoginComponent } from './rooms/login/login.component';
import { DipslaytabComponent } from './rooms/dipslaytab/dipslaytab.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    RoomlistComponent,
    LoginComponent,
    DipslaytabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
