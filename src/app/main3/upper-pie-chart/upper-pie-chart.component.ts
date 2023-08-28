import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-upper-pie-chart',
  templateUrl: './upper-pie-chart.component.html',
  styleUrls: ['./upper-pie-chart.component.css'],
})
export class UpperPieChartComponent {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: {
      //plotBackgroundColor: null,
      // plotBorderWidth: null,
      plotShadow: false,
      type: 'pie',
    },
    credits: {
      enabled: false, // Set to false to remove the Highcharts watermark
    },
    title: {
      text: '',
      align: 'right',
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
    },
    accessibility: {
      point: {
        valueSuffix: '%',
      },
    },
    plotOptions: {
      pie: {
        //allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: false,
        },
        //showInLegend: true,
      },
    },
    series: [
      {
        type: 'pie',
        name: 'Brands',
        //colorByPoint: true,
        data: [
          {
            name: 'Chrome',
            y: 144.77,
            //sliced: true,
            //selected: true,
          },
          //{
          // name: 'Edge',
          // y: 12.82,
          //},
          {
            name: 'Firefox',
            y: 54.63,
          },
          //{
          // name: 'Safari',
          // y: 2.44,
          //},
          /*{
            name: 'Internet Explorer',
            y: 2.02,
          },*/
          {
            name: 'Other',
            y: 33.28,
          },
        ],
      },
    ],
  };
}
