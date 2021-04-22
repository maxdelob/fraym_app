export class Chart {
  constructor(name){
    this.view = [1000, 400];
    this.legend = false;
    this.showLabels = false;
    this.animations = true;
    this.xAxis = true;
    this.yAxis = true;
    this.showXAxisLabel = true;
    this.showYAxisLabel  = true;
    this.showGridLines = false
    this.xAxisLabel = "Dates";
    this.yAxisLabel = "End of Day US Stock Prices (" + name + ")";
    this.timeline = true;
    this.colorScheme = {
      domain: ['#673ab7']
    };
  }

  view: number[]
  legend: boolean;
  showLabels: boolean;
  animations: boolean;
  xAxis: boolean;
  yAxis: boolean;
  showXAxisLabel: boolean;
  showYAxisLabel: boolean;
  showGridLines: boolean;
  xAxisLabel: string;
  yAxisLabel: string;
  timeline: boolean;
  colorScheme:any;
}
