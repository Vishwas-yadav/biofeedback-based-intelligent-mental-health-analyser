import { Component, OnInit } from '@angular/core';
import { DatacentreService } from 'src/app/datacentre.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page-dashboard',
  templateUrl: './main-page-dashboard.component.html',
  styleUrls: ['./main-page-dashboard.component.css']
})
export class MainPageDashboardComponent implements OnInit {
  stresslevel=20;
  stressLevelMsg;
  constructor(private datacentre:DatacentreService,private router:Router) { }
  ngOnInit() {
    this.datacentre.findLastTestGivenById(localStorage
      .getItem("user")).subscribe(data=>{
        console.log("hehehehehehe:",data);
        this.stresslevel=data[0].testscore;
        this.setStressRange();
      });
  }
  setStressRange(){
    if(this.stresslevel<=57){
      this.stressLevelMsg="LOW";
    }else if(this.stresslevel>=58&&this.stresslevel<=68){
      this.stressLevelMsg="MEDIUM";
    }else if(this.stresslevel>=69&&this.stresslevel<=125){
      this.stressLevelMsg="HIGH";
    }
  }
  retest(){
    this.router.navigate(['/dashboard/testPage']);
  }
  remedy(){
    this.router.navigate(['/dashboard/remedy']);
  }
  showStat(){
    this.router.navigate(['/dashboard/stat']);

  }

}
