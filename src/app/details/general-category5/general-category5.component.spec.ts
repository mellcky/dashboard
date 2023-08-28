import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralCategory5Component } from './general-category5.component';

describe('GeneralCategory5Component', () => {
  let component: GeneralCategory5Component;
  let fixture: ComponentFixture<GeneralCategory5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeneralCategory5Component]
    });
    fixture = TestBed.createComponent(GeneralCategory5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
