import { Component, OnInit } from '@angular/core';
import { DatacentreService } from 'src/app/datacentre.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css']
})
export class DashboardHomeComponent implements OnInit {
  userid;
  name;
  constructor(private datacentre:DatacentreService,private router:Router) { }

  ngOnInit() {
    this.userid=localStorage.getItem("user");
    if(this.userid){
      this.getUserDetailfromId(this.userid);
      this.checkOnceGivenTest(this.userid);
    }else{
      this.router.navigate(['/mentalHealth']);
    }
  }
  getUserDetailfromId(userid){
    this.datacentre.getUserDetailfromId(userid).subscribe(data=>{
      console.log("coming here..:",data); 
      this.name=data[0].name;
    });
  }
  checkOnceGivenTest(userid){
    this.datacentre.checkOnceGivenTest(userid).subscribe(data=>{
      console.log("check log:",data);
      if(data.length==0){
        alert("give test");
        this.router.navigate(['/dashboard/testPage'])
      }else{
        this.router.navigate(['/dashboard/mainPage'])
      }
      
    });
  }
  logout(){
    localStorage.removeItem("user");
    this.router.navigate(['/'])
  }

}
