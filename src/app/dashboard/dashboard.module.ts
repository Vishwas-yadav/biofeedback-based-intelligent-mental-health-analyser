import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { TestComponent } from './test/test.component';
import { RemedyComponent } from './remedy/remedy.component';
import { ResultStatisticsComponent } from './result-statistics/result-statistics.component';
import { MainPageDashboardComponent } from './main-page-dashboard/main-page-dashboard.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DashboardHomeComponent, TestComponent, RemedyComponent, ResultStatisticsComponent, MainPageDashboardComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
