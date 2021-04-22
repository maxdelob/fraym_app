import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { element } from 'protractor';
import { Subject } from 'rxjs';
import { ChartData } from 'src/app/models/chart-data.model';
import { Company } from 'src/app/models/company.model';
import { Dates } from 'src/app/models/dates.model';
import { GeneralService } from 'src/app/services/general.service';
import { Chart } from 'src/app/utils/chart';
// import { Chart } from 'src/app/utils/chart';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit, OnDestroy {
  company: Company; 
  data:ChartData;
  options: Chart;
  dates:Dates;
  dateStartCrt = new FormControl(new Date());
  dateEndCrt = new FormControl(new Date());
  private ngUnsubscribe = new Subject();
  constructor(private generalService: GeneralService) {}

  ngOnInit(): void {
    this.company = this.generalService.getCompanySelected();
    if(!this.company){ // reload case 
      // TODO : create get Company by Id endpoint to get the company for url
      this.company = new Company('Apple Inc. (AAPL)', 'AAPL')
    }
   
    this.initDatePicker();
    
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  createChart(){
    this.generalService.getChart(this.company.ticker, this.dates.min, this.dates.max).subscribe(res => {
      this.data = res;
      this.options = new Chart(this.data[0].name);
    })    
  }

  initDatePicker(){
    this.generalService.getChartDates(this.company.ticker).subscribe(res => {
      this.dates = res[0];
      this.dateStartCrt.setValue(new Date(this.dates.min))
      this.dateEndCrt.setValue(new Date(this.dates.max))
      this.createChart();
    });
    
  }

  dateSelected(e){  
    const start = this.parseDate(new Date(this.dateStartCrt.value));
    const end = this.parseDate(new Date(this.dateEndCrt.value));
    this.generalService.getChart(this.company.ticker, start, end).subscribe(res => {
      this.data = res;
    })
  }

  parseDate(d){
    return [d.getFullYear(), d.getMonth()+1, d.getDate()].join('/')
  }

  formatXaxis(val){
    const date = new Date(val);
    let month:any = date.getMonth()+1;
    month = month.toString()
    let day = date.getDay().toString(); 
    if(day.length > 2){  day =  "0"+ val } 
    if(month.length > 2){  month =  "0" + val } 
    return day + "/"  +  month;
  }
}
