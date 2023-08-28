import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-basic-bar',
  templateUrl: './basic-bar.component.html',
  styleUrls: ['./basic-bar.component.css'],
})
export class BasicBarComponent {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: {
      type: 'column',
    },
    title: {
      text: '',
    },
    credits: {
      enabled: false, // Set to false to remove the Highcharts watermark
    },
    //subtitle: {
    // text: 'Source: WorldClimate.com',
    //},
    xAxis: {
      categories: [
        'JAN',
        'FEB',
        'MAR',
        'APR',
        'MAY',
        'JUN',
        'JUL',
        'AUG',
        'SEP',
        'OCT',
        'NOV',
        'DEC',
      ],
      crosshair: true,
    },
    yAxis: {
      gridLineWidth: 0,
      min: 0,
      title: {
        text: '',
      },
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true,
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
    },
    series: [
      {
        type: 'column',
        name: '',
        data: [
          25, 41.5, 41.4, 60.2, 70.0, 50.0, 60.6, 25.5, 70.4, 44.1, 95.6, 100,
        ],
      },
    ],
  };
}
