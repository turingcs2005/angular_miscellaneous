import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedDirectivesComponent } from './nested-directives.component';

describe('NestedDirectivesComponent', () => {
  let component: NestedDirectivesComponent;
  let fixture: ComponentFixture<NestedDirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NestedDirectivesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
