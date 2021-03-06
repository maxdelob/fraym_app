import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';

import { NgxChartsModule } from '@swimlane/ngx-charts';

import { InputComponent } from './components/input/input.component';
import { ChartComponent } from './components/chart/chart.component';


import {init} from 'echarts';


export function echarts() {
  return import('echarts');
}
const routes: Routes = [
  {path:'', component: InputComponent},
  {path:':ticker', component:ChartComponent}
]; 

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule,
    RouterModule.forRoot(routes),
    MatInputModule, MatAutocompleteModule, MatFormFieldModule,
    MatToolbarModule, MatButtonModule, MatDatepickerModule,
    MatNativeDateModule, MatRippleModule,
    NgxChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
