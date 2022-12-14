import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css'],
})
export class PieComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  options = {
    title: {
      text: 'Clasificación por salarios',
      subtext: '(A mayor clase mayor salario)',
      left: 'center',
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)',
    },
    legend: {
      bottom: 5,
      left: 'center',
      data: ['Clase A', 'Clase B', 'Clase C', 'Clase D', 'Clase E'],
    },
    series: [
      {
        type: 'pie',
        radius: '60%',
        center: ['50%', '50%'],
        selectedMode: 'single',
        data: [
          { value: 737, name: 'Clase A' },
          { value: 510, name: 'Clase B' },
          { value: 434, name: 'Clase C' },
          { value: 335, name: 'Clase D' },
          { value: 1548, name: 'Clase E' },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      },
    ],
  };
}
