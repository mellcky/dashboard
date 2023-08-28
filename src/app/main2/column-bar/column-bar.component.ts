import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-column-bar',
  templateUrl: './column-bar.component.html',
  styleUrls: ['./column-bar.component.css'],
})
export class ColumnBarComponent {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: {
      type: 'cylinder',
    },
    title: {
      text: '',
      align: 'left',
    },
    credits: {
      enabled: false, // Set to false to remove the Highcharts watermark
    },
    xAxis: {
      categories: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
    },
    yAxis: {
      min: 0,
      //gridLineWidth: 0,

      title: {
        text: '',
      },
      stackLabels: {
        enabled: true,
      },
    },
    legend: {
      align: 'left',
      x: 70,
      verticalAlign: 'top',
      y: 70,
      floating: true,
      backgroundColor: 'white',
      //Highcharts.defaultOptions.legend.backgroundColor || 'white',
      borderColor: '#CCC',
      borderWidth: 1,
      shadow: false,
    },
    tooltip: {
      headerFormat: '<b>{point.x}</b><br/>',
      pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}',
    },
    plotOptions: {
      column: {
        stacking: 'normal',
        dataLabels: {
          enabled: false,
        },

        pointPadding: 90,
      },
    },
    series: [
      {
        type: 'column',
        name: 'J',
        data: [
          { y: 0, pointWidth: 15 },
          { y: 2, pointWidth: 15 },
          { y: 6, pointWidth: 15 },
          { y: 3, pointWidth: 15 },
          { y: 7, pointWidth: 15 },
          { y: 12, pointWidth: 15 },
          { y: 5, pointWidth: 15 },
          { y: 17, pointWidth: 15 },
          { y: 23, pointWidth: 15 },
          { y: 13, pointWidth: 15 },
          { y: 32, pointWidth: 15 },
          { y: 73, pointWidth: 15 },
        ],
      },
      {
        type: 'column',
        name: 'F',
        pointWidth: 15,

        data: [14, 8, 8, 12],
      },
      {
        type: 'column',
        name: 'M',
        pointWidth: 15,
        data: [0, 2, 6, 3],
      },
    ],
  };
}
