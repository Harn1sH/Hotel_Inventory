import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {deets,room} from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsComponent implements OnInit {

  constructor() {
    this.logvalue = "User";
   }
   roomdeets : deets[] = [];
   seldroom! : deets;
   newroom! : deets;
  ngOnInit(): void {

    this.roomdeets= [
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

  }

  
  loghide: boolean = false;
  logvalue!: string;

  tl : boolean = false; 

  hotelname = 'Whaaaaaaaaat Whaaaaat';
  th = false;
  dums = 0;
  rooms = 10;
  tab = 0;
  tablebutton = 'Show Table'
  tablehide = 1;
  showhide = false;

  room: room = {
    availablerooms: 10,
    bookedrooms: 5,
    totalrooms: 15,
  };

  hide = false;
  dummy = "Hide Details";
  tv!:string;

  

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

    if(this.room.availablerooms == 0){
      this.showhide = !this.showhide;
    }
  }


  tabhide(){
    if(this.th){
      this.tablebutton = "Hide Table";
    }else{
      this.tablebutton = "Show Table";
    }

  }



  tothide(){
    
    console.log("tohide:      ",this.tl,this.loghide);
    this.tv = this.logvalue;
  }


  roomsel(sedroom:deets){
    this.seldroom = sedroom;
    
  }

  addr(){
     this.newroom = 
     {
      roomid: 4,
      roomtype: 'Private Room',
      ameneties: 'AC minibar and Mini Fridge ',
      price: 10000,
      photos: 'https://images.pexels.com/photos/70441/pexels-photo-70441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      checkintime: new Date('13-Jan-2023'),
      checkouttime: new Date('14-Jan-2023'),
    }

    this.roomdeets = [...this.roomdeets,this.newroom];
  }
}
