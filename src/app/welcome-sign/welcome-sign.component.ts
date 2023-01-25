import { Component, OnInit ,ViewChild , AfterViewInit} from '@angular/core';
import {HeaderComponent} from '../header/header.component';

@Component({
  selector: 'app-welcome-sign',
  templateUrl: './welcome-sign.component.html',
  styleUrls: ['./welcome-sign.component.scss']
})
export class WelcomeSignComponent implements OnInit,AfterViewInit {

  constructor() { }



  ngAfterViewInit(): void {
    this.headercomponent.title = "Welcome to The Baratie";

  }

  ngOnInit(): void {

    console.log(this.headercomponent);

  }

  @ViewChild(HeaderComponent) headercomponent! : HeaderComponent;



}
