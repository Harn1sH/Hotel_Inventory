import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomsComponent } from './rooms/rooms.component';
import { DisplaytabComponent } from './rooms/displaytab/displaytab.component';
import { LoginComponent } from './login/login.component';
import { WelcomeSignComponent } from './welcome-sign/welcome-sign.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    DisplaytabComponent,
    LoginComponent,
    WelcomeSignComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
