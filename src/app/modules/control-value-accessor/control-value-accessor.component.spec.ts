import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlValueAccessorComponent } from './control-value-accessor.component';

describe('ControlValueAccessorComponent', () => {
  let component: ControlValueAccessorComponent;
  let fixture: ComponentFixture<ControlValueAccessorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlValueAccessorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlValueAccessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
