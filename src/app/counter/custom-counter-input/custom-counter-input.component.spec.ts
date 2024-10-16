import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomCounterInputComponent } from './CustomCounterInputComponent';

describe('CustomCounterInputComponent', () => {
  let component: CustomCounterInputComponent;
  let fixture: ComponentFixture<CustomCounterInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomCounterInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomCounterInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
