export class Chart {
  constructor(name, data){
    this.xAxis =  {  type: 'time', splitLine: {show: false}}
    this.yAxis = {type: 'value', boundaryGap: [0, '100%'], splitLine: { show: false }}
    this.title = {text: name}
    this.series = [{name: 'Data',type: 'line',showSymbol: false, hoverAnimation: true, data: data}];
    this.animationEasing = 'elasticOut';
  }
  title
  xAxis
  yAxis
  series
  animationEasing
}
