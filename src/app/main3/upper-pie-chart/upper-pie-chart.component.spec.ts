import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpperPieChartComponent } from './upper-pie-chart.component';

describe('UpperPieChartComponent', () => {
  let component: UpperPieChartComponent;
  let fixture: ComponentFixture<UpperPieChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpperPieChartComponent]
    });
    fixture = TestBed.createComponent(UpperPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
