import { Component } from '@angular/core';
import { room } from './rooms'
import { deets } from './rooms'
@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {

  hotelname = 'Whaaaaaaaaat Whaaaaat';
  th = false;
  dums = 0;
  rooms = 10;
  tab = 0;
  tablebutton = 'Show Table'
  tablehide = 1;

  room: room = {
    availablerooms: 10,
    bookedrooms: 5,
    totalrooms: 15,
  };

  hide = false;
  dummy = "Hide Details";

  roomdeets: deets[] = [
    {
      roomid: 1,
      roomtype: 'Deluxe Room',
      ameneties: 'AC and Mini Fridge',
      price: 2000,
      photos: 'https://images.pexels.com/photos/70441/pexels-photo-70441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      checkintime: new Date('13-Jan-2023'),
      checkouttime: new Date('14-Jan-2023'),
    },
    {
      roomid: 2,
      roomtype: 'Luxe Room',
      ameneties: 'AC Mini bar and Mini Fridge',
      price: 5000,
      photos: 'https://images.pexels.com/photos/70441/pexels-photo-70441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      checkintime: new Date('13-Jan-2023'),
      checkouttime: new Date('14-Jan-2023'),
    },
    {
      roomid: 3,
      roomtype: 'Private Room',
      ameneties: 'AC Mini bar and Mini Fridge',
      price: 10000,
      photos: 'https://images.pexels.com/photos/70441/pexels-photo-70441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      checkintime: new Date('13-Jan-2023'),
      checkouttime: new Date('14-Jan-2023'),
    }
  ]

  toggle() {

    this.hide = !this.hide;
    this.details();
  }

  tabtog(){
    this.th = !this.th;
    this.tabhide();
  }

  details() {
    if (this.hide) {
      this.dummy = "Show Details";
    } else {
      this.dummy = "Hide Details";
    }

  }


  book() {
    if (this.room?.availablerooms) {
      if (this.room.availablerooms > 0) {
        this.room.availablerooms = this.room.availablerooms - 1;
      }
    }
  }


  tabhide(){
    if(this.th){
      this.tablebutton = "Hide Table";
    }else{
      this.tablebutton = "Show Table";
    }

  }


}

