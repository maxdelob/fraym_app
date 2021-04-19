import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Company } from '../models/company.model';



@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  private company:Company;
  constructor(private http: HttpClient) { }

  setCompanySelected(c){
    this.company = c;
    return this.company;
  }

  getCompanySelected(){
    return this.company;
  }

  getCompanies(){
      return this.http.get(environment.url + "companies");
  }

  getChart(id):Observable<any> {
    return this.http.get(environment.url + "chart/" + id);
  }
  getChartDates(id){
    return this.http.get(environment.url + "chart/" + id + '/dates');
  }
}
