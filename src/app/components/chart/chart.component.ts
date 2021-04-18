import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from 'src/app/models/company.model';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  company: Company; 
  options: any;
  updateOptions: any;
  private oneDay = 24 * 3600 * 1000;
  private now: Date;
  private value: number;
  private data: any[];
  private timer: any;
  constructor(private router : Router, private generalService: GeneralService) {}


  ngOnInit(): void {
    this.init()
    if(!this.company){  // handle relaod case
      this.generalService.setCompany(this.router.url.replace('/', ''))
      this.init();
    }
  }

  init(){
    this.company = this.generalService.getCompany();
    this.createChart();
  }

  createChart() {
    // generate some random testing data:
    this.data = [];
    this.now = new Date(1997, 9, 3);
    this.value = Math.random() * 1000;

    for (let i = 0; i < 1000; i++) {
      this.data.push(this.randomData());
    }

    console.log(this.company)
    // initialize chart options:
    this.options = {
      title: {
        text: 'End of Day US Stock Prices (dates)'
      },
      //  tooltip: {
      //    trigger: 'axis',
      //    formatter: (params) => {
      //      params = params[0];
      //      const date = new Date(params.name);
      //      return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
      //    },
      //    axisPointer: {
      //      animation: false
      //    }
      //  },
      xAxis: {
        type: 'time',
        splitLine: {
          show: false
        }
      },
      yAxis: {
        type: 'value',
        boundaryGap: [0, '100%'],
        splitLine: {
          show: false
        }
      },
      dataZoom: [
        {
          type: 'slider',
          xAxisIndex: 0,
          filterMode: 'empty',
        }],
      series: [{
        name: 'Mocking Data',
        type: 'line',
        showSymbol: false,
        hoverAnimation: false,
        data: this.data
      }]
    };

    // Mock dynamic data:
    this.timer = setInterval(() => {
      for (let i = 0; i < 5; i++) {
        this.data.shift();
        this.data.push(this.randomData());
      }

      // update series data:
      this.updateOptions = {
        series: [{
          data: this.data
        }]
      };
    }, 1000);


    console.log(this.data);
    

  }


  randomData() {
    this.now = new Date(this.now.getTime() + this.oneDay);
    this.value = this.value + Math.random() * 21 - 10;
    return {
      name: this.now.toString(),
      value: [
        [this.now.getFullYear(), this.now.getMonth() + 1, this.now.getDate()].join('/'),
        Math.round(this.value)
      ]
    };
  }
}
