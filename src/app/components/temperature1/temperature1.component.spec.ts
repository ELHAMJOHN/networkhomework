import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Temperature1Component } from './temperature1.component';

describe('Temperature1Component', () => {
  let component: Temperature1Component;
  let fixture: ComponentFixture<Temperature1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Temperature1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Temperature1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
