import { Component } from '@angular/core';
import { Output, EventEmitter} from '@angular/core'
import { SharedService } from '../shared.service';

@Component({
  selector: 'hinv-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  logvalue='';
  logg='';
  loghide=true;
  logghide = false;

  log(){
    this.loghide = !this.loghide;
  }
  ad(){
    this.logvalue = 'Admin';
    this.logghide = !this.logghide
    this.loghide = !this.loghide;
    this.lhide.logghide = this.logghide;
    this.lhide.loggvalue = this.logvalue;


  }

  usr(){
    this.logvalue = 'user';
    this.logghide = !this.logghide
    this.loghide = !this.loghide;
    this.lhide.logghide = this.logghide;
    this.lhide.loggvalue = this.logvalue;

  }

  constructor(private lhide :SharedService){}

}
