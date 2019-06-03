import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatacentreService } from '../datacentre.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  rForm: FormGroup;
  email: string = "";
  name: string = "";
  password: string = "";
  age: string = "";
  gender: string = "";
  place: string = "";
  forLogin;
  forUser;
  userid;

  wrongCredentialsMsg="";
  constructor(private fb:FormBuilder,private datacentre:DatacentreService,private router:Router) {
    this.rForm = fb.group({
      'email': [null, Validators.compose([Validators.required, Validators.email])],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(5)])],
      'name':[null,Validators.compose([Validators.required])],
      'age':[null,Validators.compose([Validators.required])],
      'gender':[null,Validators.compose([Validators.required])],
      'place':[null,Validators.compose([Validators.required])]

    })
   }

  ngOnInit() {
  }
  addPost(post){    
    this.email=post.email;
    this.password=post.password;
    this.age=post.age;
    this.gender=post.gender;
    this.place=post.place;
    this.name=post.name;
    this.forUser={"name":this.name,"age":this.age,"gender":this.gender,"place":this.place};
    this.datacentre.addNewUser(this.forUser).subscribe(res=>{
      
    this.forLogin={"email":this.email,"password":this.password,"userid":res.user._id};
    this.datacentre.addNewLogin(this.forLogin).subscribe(resdata=>{
    this.rForm.reset(); 
    this.router.navigate(['/mentalHealth']);
    });
    });
  }
  


}
