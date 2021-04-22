# APP

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.9.


Since I am familiar with it, I use [Angular Material](https://material.angular.io/) for autocomplete, toolbar, datepicker components. 

[Echarts.js](https://echarts.apache.org/en/tutorial.html#Get%20Started%20with%20ECharts%20in%205%20minutes) seemed to be the perfect fit for the study case. 

I initially used [ngx-echart](https://xieziyu.github.io/ngx-echarts/#/welcome) on the top of it for Angular integration. Due to production deployement issues and bugs (x-axis, DataZoom), I decided to get rid of it and do not recommend it. 

I finnaly use [ngx-chart](https://github.com/swimlane/ngx-charts) to integrate. It has worked well and was easy to use. 


## Test locally

Run `npm start` in the [API](https://github.com/maxdelob/fraym_api) before.  

Run `ng serve` 

Navigate to `http://localhost:4200/`

Test deployement locally `ng build` + `nmp start` then navigate to `http://localhost:8081/`

## Useful links for development

[CSS Gradient](https://uigradients.com/#Margo)

[Echart.js examples](https://echarts.apache.org/en/tutorial.html#Get%20Started%20with%20ECharts%20in%205%20minutes)

[ngx-chart example I use](https://xieziyu.github.io/ngx-echarts/#/basic/basic-usage)

[heroku deployement](https://betterprogramming.pub/how-to-deploy-your-angular-9-app-to-heroku-in-minutes-51d171c2f0d)



