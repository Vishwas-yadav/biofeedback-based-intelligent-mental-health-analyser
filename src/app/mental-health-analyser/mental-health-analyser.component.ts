import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatacentreService } from '../datacentre.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-mental-health-analyser',
  templateUrl: './mental-health-analyser.component.html',
  styleUrls: ['./mental-health-analyser.component.css']
})
export class MentalHealthAnalyserComponent implements OnInit {
  rForm: FormGroup;
  email: string = "";
  password: string = "";
  wrongCredentialsMsg="";
  forAuth;

  constructor(private fb:FormBuilder,private datacentre:DatacentreService,private router:Router) { 
    this.rForm = fb.group({
      'email': [null, Validators.compose([Validators.required, Validators.email])],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(5)])],
    })
  }

  ngOnInit() {
  }
  addPost(post){
    this.email=post.email;
    this.password=post.password;
    this.forAuth={"email":post.email,"password":post.password};
    this.datacentre.checkAuth(this.forAuth).subscribe(data=>{
      
      if(data.result==null){
        this.wrongCredentialsMsg="wrong login credentials !";
        localStorage.removeItem("user");
      }else{
        localStorage.setItem("user",data.result.userid);
        this.router.navigate(['/dashboard']);
      }
    });
    this.rForm.reset();
  }

  seterrormsg(){
    this.wrongCredentialsMsg="";
  }

}
