import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Category3Component } from './category3.component';

describe('Category3Component', () => {
  let component: Category3Component;
  let fixture: ComponentFixture<Category3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Category3Component]
    });
    fixture = TestBed.createComponent(Category3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
