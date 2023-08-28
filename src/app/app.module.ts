import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { HeaderComponent } from './header/header.component';
import { LaboratoryComponent } from './header/laboratory/laboratory.component';
import { StockComponent } from './header/stock/stock.component';
import { GeneralComponent } from './header/general/general.component';
import { IconComponent } from './header/icon/icon.component';
import { DetailsComponent } from './details/details.component';
import { StaffComponent } from './details/staff/staff.component';
import { CostComponent } from './details/cost/cost.component';
import { TimeComponent } from './details/time/time.component';
import { PatientsComponent } from './details/patients/patients.component';
import { MainComponent } from './main/main.component';
import { HorizontalBarChartComponent } from './main/horizontal-bar-chart/horizontal-bar-chart.component';
import { Category2Component } from './details/category2/category2.component';
import { Category3Component } from './details/category3/category3.component';
import { CategoryComponent } from './details/category/category.component';

import { GeneralCategory1Component } from './details/general-category1/general-category1.component';
import { GeneralCategory2Component } from './details/general-category2/general-category2.component';
import { GeneralCategory3Component } from './details/general-category3/general-category3.component';
import { GeneralCategory4Component } from './details/general-category4/general-category4.component';
import { GeneralCategory5Component } from './details/general-category5/general-category5.component';
import { AppRoutingModule } from './app-routing.module';
import { Main2Component } from './main2/main2.component';
import { AreaChartComponent } from './main2/area-chart/area-chart.component';
import { ColumnBarComponent } from './main2/column-bar/column-bar.component';
import { GeneralCategoryAlltimeComponent } from './details/general-category-alltime/general-category-alltime.component';
import { Main3Component } from './main3/main3.component';
import { BasicBarComponent } from './main3/basic-bar/basic-bar.component';
import { PieChartComponent } from './main3/pie-chart/pie-chart.component';
import { UpperPieChartComponent } from './main3/upper-pie-chart/upper-pie-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LaboratoryComponent,
    StockComponent,
    GeneralComponent,
    IconComponent,
    DetailsComponent,
    StaffComponent,
    CostComponent,
    TimeComponent,
    PatientsComponent,
    MainComponent,
    HorizontalBarChartComponent,
    CategoryComponent,
    Category2Component,
    Category3Component,
    GeneralCategory1Component,
    GeneralCategory2Component,
    GeneralCategory3Component,
    GeneralCategory4Component,
    GeneralCategory5Component,
    Main2Component,
    AreaChartComponent,
    ColumnBarComponent,
    GeneralCategoryAlltimeComponent,
    Main3Component,
    BasicBarComponent,
    PieChartComponent,
    UpperPieChartComponent,
  ],
  imports: [BrowserModule, HighchartsChartModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
