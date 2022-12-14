import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegoLightsComponent } from './legolights.component';

describe('LegolightsComponent', () => {
  let component: LegoLightsComponent;
  let fixture: ComponentFixture<LegoLightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LegoLightsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LegoLightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
