import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResearchComponent } from './research/research.component';
import { MentalHealthAnalyserComponent } from './mental-health-analyser/mental-health-analyser.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DashboardHomeComponent } from './dashboard/dashboard-home/dashboard-home.component';
import { TestComponent } from './dashboard/test/test.component';
import { MainPageDashboardComponent } from './dashboard/main-page-dashboard/main-page-dashboard.component';
import { RemedyComponent } from './dashboard/remedy/remedy.component';
import { ResultStatisticsComponent } from './dashboard/result-statistics/result-statistics.component';

const routes: Routes = [
  { 
    path: '',
   component: HomeComponent 
  },
  {
    path: 'research',
    component:ResearchComponent
  },
  {
    path:'mentalHealth',
    component:MentalHealthAnalyserComponent
  },
  {
    path:'register',
    component:SignUpComponent
  },
  {
    path:'dashboard',
    component:DashboardHomeComponent,
    children:[{path:'',component:MainPageDashboardComponent}
    ,{path:'testPage',component:TestComponent},{
      path:'mainPage',component:MainPageDashboardComponent
    },{
      path:'remedy',component:RemedyComponent
    },
  {
    path:'stat',component:ResultStatisticsComponent
  }]
  }
  

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
