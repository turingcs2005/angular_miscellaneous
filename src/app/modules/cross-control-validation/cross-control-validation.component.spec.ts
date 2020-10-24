import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrossControlValidationComponent } from './cross-control-validation.component';

describe('CrossControlValidationComponent', () => {
  let component: CrossControlValidationComponent;
  let fixture: ComponentFixture<CrossControlValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrossControlValidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrossControlValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
