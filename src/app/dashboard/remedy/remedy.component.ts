import { Component, OnInit } from '@angular/core';
import { DatacentreService } from 'src/app/datacentre.service';

@Component({
  selector: 'app-remedy',
  templateUrl: './remedy.component.html',
  styleUrls: ['./remedy.component.css']
})
export class RemedyComponent implements OnInit {
datacoming;
  constructor(private datacentre:DatacentreService) { }

  ngOnInit() {
    this.datacentre.findLastTestGivenById(localStorage.getItem("user")).subscribe(data=>{
      this.datacoming=data[0];
      console.log("daadadaddadada",data[0]);
      
    })

  }

}
