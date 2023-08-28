import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralCategory4Component } from './general-category4.component';

describe('GeneralCategory4Component', () => {
  let component: GeneralCategory4Component;
  let fixture: ComponentFixture<GeneralCategory4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeneralCategory4Component]
    });
    fixture = TestBed.createComponent(GeneralCategory4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
