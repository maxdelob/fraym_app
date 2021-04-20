import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Company } from 'src/app/models/company.model';
import { GeneralService } from 'src/app/services/general.service';
import { Chart } from 'src/app/utils/chart';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  company: Company; 
  data:any;
  options: any;
  updateOptions: any;
  dates:any = {min:"", max:""};
  dateStartCrt = new FormControl(new Date())
  dateEndCrt = new FormControl(new Date())
  constructor(private router : Router, private generalService: GeneralService) {}


  ngOnInit(): void {
    this.company = this.generalService.getCompanySelected();
    if(!this.company){ // reload case
      this.company = new Company('Apple Inc. (AAPL)', 'AAPL')
    }
    this.createChart();
    this.initDatePicker();
  }

  createChart() {
    this.generalService.getChart(this.company.ticker).subscribe((res)=>{
      this.data = res
      this.options = new Chart(this.company.name + ' End of Day US Stock Prices (' + this.parseDate(new Date(this.dates.min)) + ' => ' + this.parseDate(new Date(this.dates.max)) + ')', this.data)
    })
  }

  initDatePicker(){
    this.generalService.getChartDates(this.company.ticker).subscribe(res => {
      this.dates = res[0];
      this.dateStartCrt.setValue(new Date(this.dates.min))
      this.dateEndCrt.setValue(new Date(this.dates.max))
    });
    
  }

  dateSelected(e){  
    const start = new Date(this.dateStartCrt.value);
    const end = new Date(this.dateEndCrt.value);
    this.data = this.data.filter((e)=>{ return e.value[0]>=  this.parseDate(start) &&  e.value[0]<= this.parseDate(end) })
    this.options = null;
    this.options = new Chart(this.company.name + ' End of Day US Stock Prices (' + this.parseDate(new Date(this.dates.min)) + ' => ' + this.parseDate(new Date(this.dates.max)) + ')', this.data)
  }

  parseDate(d){
    return [d.getFullYear(), d.getMonth()+1, d.getDate()].join('/')
  }
  
}
