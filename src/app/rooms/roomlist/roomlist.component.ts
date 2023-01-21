import { Component,Input,OnChanges,OnInit } from '@angular/core';
import {deets,room} from 'src/app/rooms/rooms'

@Component({
  selector: 'hinv-roomlist',
  templateUrl: './roomlist.component.html',
  styleUrls: ['./roomlist.component.scss']
})
export class RoomlistComponent {

  @Input() roomsdeet : deets[] = [];

  
  

}
