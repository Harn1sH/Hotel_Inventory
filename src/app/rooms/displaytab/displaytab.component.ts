import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, OnChanges, SimpleChanges } from '@angular/core';
import { deets } from '../rooms';
import { outputAst } from '@angular/compiler';

@Component({
  selector: 'app-displaytab',
  templateUrl: './displaytab.component.html',
  styleUrls: ['./displaytab.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DisplaytabComponent implements OnInit , OnChanges{

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
/*       console.log("Done");
 */

  }

  ngOnInit(): void {
  }

  @Input() roomsdeet: deets[] = [];
  @Output() selectedroom = new EventEmitter<deets>()

  selectroom(selroom: deets) {
    this.selectedroom.emit(selroom);
  }

}
