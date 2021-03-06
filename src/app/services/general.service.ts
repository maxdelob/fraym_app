import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Company } from '../models/company.model';
import { ChartData } from '../models/chart-data.model';



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

  getCompanies(id):Observable<Company[]>{
    let query = environment.url + "companies"
    if(id) query = query + "/" + id
    return this.http.get<Company[]>(query);
  }

  getChart(id, min, max):Observable<ChartData> {
    return this.http.get<ChartData>(environment.url + "chart/" + id + "?min=" +min+ "&max=" + max);
  }
  getChartDates(id){
    return this.http.get(environment.url + "chart/" + id + '/dates');
  }
}
