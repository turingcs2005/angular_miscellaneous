import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedFormComponent } from './shared-form.component';

describe('SharedFormComponent', () => {
  let component: SharedFormComponent;
  let fixture: ComponentFixture<SharedFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
