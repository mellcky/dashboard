import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css'],
})
export class PieChartComponent {
  // Create the chart
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: {
      //plotBackgroundColor: null,
      // plotBorderWidth: null,
      plotShadow: false,
      type: 'pie',
      marginTop: 40,
    },
    title: {
      text: 'Top Common Diseases',
      align: 'center',
      style: {
        fontSize: '14px', // Adjust this value to set the desired font size
      },
    },
    credits: {
      enabled: false, // Set to false to remove the Highcharts watermark
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
          //  y: 2.82,
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
