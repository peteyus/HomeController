import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentHostComponent } from './componenthost.component';

describe('ComponenthostComponent', () => {
  let component: ComponentHostComponent;
  let fixture: ComponentFixture<ComponentHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentHostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
