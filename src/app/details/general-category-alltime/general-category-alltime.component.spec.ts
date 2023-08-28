import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralCategoryAlltimeComponent } from './general-category-alltime.component';

describe('GeneralCategoryAlltimeComponent', () => {
  let component: GeneralCategoryAlltimeComponent;
  let fixture: ComponentFixture<GeneralCategoryAlltimeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeneralCategoryAlltimeComponent]
    });
    fixture = TestBed.createComponent(GeneralCategoryAlltimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
