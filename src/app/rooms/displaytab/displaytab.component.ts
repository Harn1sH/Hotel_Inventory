import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { deets } from '../rooms';
import { outputAst } from '@angular/compiler';

@Component({
  selector: 'app-displaytab',
  templateUrl: './displaytab.component.html',
  styleUrls: ['./displaytab.component.scss']
})
export class DisplaytabComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() roomsdeet : deets[] = [];
  @Output() selectedroom = new EventEmitter<deets>()

  selectroom(selroom:deets){
    this.selectedroom.emit(selroom);
  }

}
