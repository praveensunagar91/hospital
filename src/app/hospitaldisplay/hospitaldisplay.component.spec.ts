import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitaldisplayComponent } from './hospitaldisplay.component';

describe('HospitaldisplayComponent', () => {
  let component: HospitaldisplayComponent;
  let fixture: ComponentFixture<HospitaldisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitaldisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitaldisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
