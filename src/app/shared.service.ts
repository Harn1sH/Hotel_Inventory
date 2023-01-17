import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

   logghide!: boolean;
   loggvalue!: string;

  constructor() { }

  setmessage(logghide:boolean,loggvalue:string){
    this.logghide = logghide;
    this.loggvalue = loggvalue;
    
  }

  getmessage(){
    return this.logghide,this.loggvalue;
  }
}
