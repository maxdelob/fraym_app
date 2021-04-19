import { Component, OnInit } from '@angular/core';
import {Company} from '../../models/company.model'
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { Router } from '@angular/router';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  companyControl = new FormControl();
  companies: Company[];
  companySelected : Company = {name:"", ticker:""}
  options: string[] = [];
  filteredOptions: Observable<string[]>;
  selectedCompany: string;
  constructor(private router : Router, private generalService: GeneralService) {}
  ngOnInit(): void {
    this.generalService.getCompanies().subscribe((res : Company[]) => {
      this.companies = res;
      this.options = this.companies.map(element => element.name)
    })
    this.filteredOptions = this.filterAutoComplete()
  }

  filterAutoComplete(){
    return this.companyControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );

  }
  private _filter(value: string): string[] {
    this.filteredOptions = this.filterAutoComplete();
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

  onSelectedCompany(){
    this.selectedCompany = this.companyControl.value
  }

  navigateToChart(){    
    this.companySelected = this.companies.filter(e => {return e.name == this.selectedCompany})[0]
    this.generalService.setCompanySelected(this.companySelected)
    this.router.navigateByUrl(this.companySelected.ticker);
  }


}
