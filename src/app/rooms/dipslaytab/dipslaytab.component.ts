import { Component, Input } from '@angular/core';
import { deets } from '../rooms';

@Component({
  selector: 'hinv-dipslaytab',
  templateUrl: './dipslaytab.component.html',
  styleUrls: ['./dipslaytab.component.scss']
})
export class DipslaytabComponent {

  @Input() roomsdeet : deets[] = [];

}
