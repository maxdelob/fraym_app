import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  private ticker;
  constructor() { }

  setCompany(ticker){
    this.ticker = ticker;
  }

  getCompany(){
    return this.ticker;
  }
}
