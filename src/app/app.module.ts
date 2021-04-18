import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule } from '@angular/material/form-field';

import { NgxEchartsModule } from 'ngx-echarts';


import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';

import { InputComponent } from './components/input/input.component';
import { ChartComponent } from './components/chart/chart.component';


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
    FormsModule, ReactiveFormsModule,
    RouterModule.forRoot(routes),
    MatInputModule, MatAutocompleteModule, MatFormFieldModule,
    MatToolbarModule, MatButtonModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
