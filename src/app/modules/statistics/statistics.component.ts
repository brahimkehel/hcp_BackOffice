import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = true;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'hcp';
  showYAxisLabel: boolean = true;
  yAxisLabel: string = 'Total';
  legendTitle: string = 'Années';
  colorScheme = {
    domain: ['#548CA8', '#1687A7', '#276678']
  };

  public multi = [
    {
      "name": "Publications",
      "series": [
        {
          "name": "2018",
          "value": 200
        },
        {
          "name": "2017",
          "value": 500
        }
      ]
    },
  
    {
      "name": "Etudes",
      "series": [
        {
          "name": "2018",
          "value": 100
        },
        {
          "name": "2017",
          "value": 200
        }
      ]
    },
  
    {
      "name": "Enquetes",
      "series": [
        {
          "name": "2018",
          "value": 132
        },
        {
          "name": "2017",
          "value": 500
        }
      ]
    },
  
    {
      "name": "Indicateurs",
      "series": [
        {
          "name": "2018",
          "value": 100
        },
        {
          "name": "2017",
          "value": 90
        }
      ]
    }
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
