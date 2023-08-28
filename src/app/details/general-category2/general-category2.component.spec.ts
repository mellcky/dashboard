import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralCategory2Component } from './general-category2.component';

describe('GeneralCategory2Component', () => {
  let component: GeneralCategory2Component;
  let fixture: ComponentFixture<GeneralCategory2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeneralCategory2Component]
    });
    fixture = TestBed.createComponent(GeneralCategory2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
