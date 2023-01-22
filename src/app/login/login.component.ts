import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  loginhide = true;
  loginvalue! :string;

  login(){
    this.loginhide = ! this.loginhide;    
  }

  admin(){
    this.loginvalue = "Admin";
    this.loginhide = ! this.loginhide;        
  }

  user(){
    this.loginvalue = "User";
    this.loginhide = ! this.loginhide;    
  }

}
