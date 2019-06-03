import { Component, OnInit } from '@angular/core';
import { DatacentreService } from 'src/app/datacentre.service';

@Component({
  selector: 'app-result-statistics',
  templateUrl: './result-statistics.component.html',
  styleUrls: ['./result-statistics.component.css']
})
export class ResultStatisticsComponent implements OnInit {
  stat;
  constructor(private datcenter:DatacentreService) { }

  ngOnInit() {
    this.datcenter.findLastTestGivenById(localStorage.getItem("user")).subscribe(data=>{
      this.stat=data;
    });
  }

}
