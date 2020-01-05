import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graficas1',
  templateUrl: './graficas1.component.html',
  styles: []
})
export class Graficas1Component implements OnInit {

  public doughnutChartLabels: string[] = ['BMW', 'Ford', 'Tesla','VW'];
  public doughnutChartData: number []= [ 50, 20, 20, 10];
  public doughnutChartType: string = 'doughnut';

  constructor() { }

  ngOnInit() {
  }

}
