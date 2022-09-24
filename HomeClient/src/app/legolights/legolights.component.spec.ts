import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegolightsComponent } from './legolights.component';

describe('LegolightsComponent', () => {
  let component: LegolightsComponent;
  let fixture: ComponentFixture<LegolightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegolightsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LegolightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
