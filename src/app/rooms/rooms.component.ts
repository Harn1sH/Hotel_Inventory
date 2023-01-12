import { Component } from '@angular/core';
import { room } from './rooms'

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {

  hotelname = 'Whaaaaaaaaat Whaaaaat';

  dums = 0;
  rooms = 10;

  room: room = {
    availablerooms: 10,
    bookedrooms: 5,
    totalrooms: 15,
  };

  hide = false;
  dummy = "Hide Details";

  toggle() {

    this.hide = !this.hide;
    this.details();
  }

  details() {
    if (this.hide) {
      this.dummy = "Show Details";
    } else {
      this.dummy = "Hide Details";
    }

  }


  book() {
    if(this.room?.availablerooms ){
      if(this.room.availablerooms > 0){
        this.room.availablerooms = this.room.availablerooms - 1;
      }
    }
    }
      
    

}

