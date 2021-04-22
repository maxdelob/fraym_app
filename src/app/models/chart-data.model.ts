export class ChartData {
    constructor(name, ticker){
      this.name = name;
      this.series = ticker
    }
    name: string
    series: Serie[]
}

export class Serie {
    name: string
    value: number
}
  