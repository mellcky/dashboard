import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralCategory3Component } from './general-category3.component';

describe('GeneralCategory3Component', () => {
  let component: GeneralCategory3Component;
  let fixture: ComponentFixture<GeneralCategory3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeneralCategory3Component]
    });
    fixture = TestBed.createComponent(GeneralCategory3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
