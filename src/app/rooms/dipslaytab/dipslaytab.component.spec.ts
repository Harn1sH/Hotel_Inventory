import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DipslaytabComponent } from './dipslaytab.component';

describe('DipslaytabComponent', () => {
  let component: DipslaytabComponent;
  let fixture: ComponentFixture<DipslaytabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DipslaytabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DipslaytabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
