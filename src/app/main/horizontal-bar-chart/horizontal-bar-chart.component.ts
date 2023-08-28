import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-horizontal-bar-chart',
  templateUrl: './horizontal-bar-chart.component.html',
  styleUrls: ['./horizontal-bar-chart.component.css'],
})
export class HorizontalBarChartComponent {
  Highcharts: typeof Highcharts = Highcharts;

  // Convert mixed data to a valid format for Highcharts

  chartOptions: Highcharts.Options = {
    chart: {
      type: 'column', // or any other chart type
      //marginLeft: 50, // Adjust this value to increase or decrease left margin
      //marginRight: 150, // Adjust this value to increase or decrease right margin
    },
    title: {
      text: '',
      align: 'left',
    },
    credits: {
      enabled: false, // Set to false to remove the Highcharts watermark
    },

    xAxis: {
      categories: [
        'gentamicin',
        'beta-lactam',
        'ampicillin',
        'benzyl penicillin',
        'azithromycin',
        'ciprofloxacin',
        'metronidazole',
        'erythromycin',
        'amoxicillin',
        'doxycycline',
      ],
      labels: {
        style: {
          color: 'black',
        },
      },
    },
    yAxis: {
      title: {
        text: '',
      },
      labels: {
        style: {
          color: 'green',
        },
        x: 100,
      },

      // This aligns the title to the top of the y-axis
      // Adjust this offset as needed
    },
    series: [
      {
        name: '',
        data: [313, 1900, 152, 1000, 1250, 1700, 800, 1750, 1950],
        type: 'bar',
      },
      //  {
      //name: 'John',
      //data: [5, 7, 3],
      // type: 'bar',
      // },
    ],
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 1500, // Adjust this value as needed
          },
        },
      ],
    },
  };
}
