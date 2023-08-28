import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralCategory1Component } from './general-category1.component';

describe('GeneralCategory1Component', () => {
  let component: GeneralCategory1Component;
  let fixture: ComponentFixture<GeneralCategory1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeneralCategory1Component]
    });
    fixture = TestBed.createComponent(GeneralCategory1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
