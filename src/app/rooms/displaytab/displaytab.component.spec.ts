import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaytabComponent } from './displaytab.component';

describe('DisplaytabComponent', () => {
  let component: DisplaytabComponent;
  let fixture: ComponentFixture<DisplaytabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaytabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplaytabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
