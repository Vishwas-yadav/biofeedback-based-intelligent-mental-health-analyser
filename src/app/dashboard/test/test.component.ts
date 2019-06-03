import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatacentreService } from 'src/app/datacentre.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  rForm: FormGroup;
  sum=0;

  constructor(private fb:FormBuilder,private datacentre:DatacentreService,private router:Router) { 
    this.rForm = fb.group({
      'q2':[null],
      'q3':[null],
      'q1':[null],
      'q4':[null],
      'q5':[null],
      'q6':[null],
      'q7':[null],
      'q8':[null],
      'q9':[null],
      'q10':[null],
      'q11':[null],
      'q12':[null],
      'q13':[null],
      'q14':[null],
      'q15':[null],
      'q16':[null],
      'q17':[null],
      'q18':[null],
      'q19':[null],
      'q20':[null],
      'q21':[null],
      'q22':[null],
      'q23':[null],
      'q24':[null],
      'q25':[null],

    })
  }


  ngOnInit() {
  }

  addPost(value){
    this.sum=0;
    console.log("post value:",value);
    if(value.q1=="never"){
      this.sum+=1;
    }
    if(value.q1=="low"){
      this.sum+=2;
    }
    if(value.q1=="medium"){
      this.sum+=3;
    }
    if(value.q1=="high"){
      this.sum+=4;
    }
    if(value.q1=="always"){
      this.sum+=5;
    }
    
    
    if(value.q2=="never"){
      this.sum+=1;
    }
    if(value.q2=="low"){
      this.sum+=2;
    }
    if(value.q2=="medium"){
      this.sum+=3;
    }
    if(value.q2=="high"){
      this.sum+=4;
    }
    if(value.q2=="always"){
      this.sum+=5;
    }

    if(value.q3=="never"){
      this.sum+=1;
    }
    if(value.q3=="low"){
      this.sum+=2;
    }
    if(value.q3=="medium"){
      this.sum+=3;
    }
    if(value.q3=="high"){
      this.sum+=4;
    }
    if(value.q3=="always"){
      this.sum+=5;
    }

    if(value.q4=="never"){
      this.sum+=1;
    }
    if(value.q4=="low"){
      this.sum+=2;
    }
    if(value.q4=="medium"){
      this.sum+=3;
    }
    if(value.q4=="high"){
      this.sum+=4;
    }
    if(value.q4=="always"){
      this.sum+=5;
    }

    if(value.q5=="never"){
      this.sum+=1;
    }
    if(value.q5=="low"){
      this.sum+=2;
    }
    if(value.q5=="medium"){
      this.sum+=3;
    }
    if(value.q5=="high"){
      this.sum+=4;
    }
    if(value.q5=="always"){
      this.sum+=5;
    }


    if(value.q6=="never"){
      this.sum+=1;
    }
    if(value.q6=="low"){
      this.sum+=2;
    }
    if(value.q6=="medium"){
      this.sum+=3;
    }
    if(value.q6=="high"){
      this.sum+=4;
    }
    if(value.q6=="always"){
      this.sum+=5;
    }


    if(value.q7=="never"){
      this.sum+=1;
    }
    if(value.q7=="low"){
      this.sum+=2;
    }
    if(value.q7=="medium"){
      this.sum+=3;
    }
    if(value.q7=="high"){
      this.sum+=4;
    }
    if(value.q7=="always"){
      this.sum+=5;
    }

    if(value.q8=="never"){
      this.sum+=1;
    }
    if(value.q8=="low"){
      this.sum+=2;
    }
    if(value.q8=="medium"){
      this.sum+=3;
    }
    if(value.q8=="high"){
      this.sum+=4;
    }
    if(value.q8=="always"){
      this.sum+=5;
    }

    if(value.q9=="never"){
      this.sum+=1;
    }
    if(value.q9=="low"){
      this.sum+=2;
    }
    if(value.q9=="medium"){
      this.sum+=3;
    }
    if(value.q9=="high"){
      this.sum+=4;
    }
    if(value.q9=="always"){
      this.sum+=5;
    }


    if(value.q10=="never"){
      this.sum+=1;
    }
    if(value.q10=="low"){
      this.sum+=2;
    }
    if(value.q10=="medium"){
      this.sum+=3;
    }
    if(value.q10=="high"){
      this.sum+=4;
    }
    if(value.q10=="always"){
      this.sum+=5;
    }

    if(value.q11=="never"){
      this.sum+=1;
    }
    if(value.q11=="low"){
      this.sum+=2;
    }
    if(value.q11=="medium"){
      this.sum+=3;
    }
    if(value.q11=="high"){
      this.sum+=4;
    }
    if(value.q11=="always"){
      this.sum+=5;
    }


    if(value.q12=="never"){
      this.sum+=1;
    }
    if(value.q12=="low"){
      this.sum+=2;
    }
    if(value.q12=="medium"){
      this.sum+=3;
    }
    if(value.q12=="high"){
      this.sum+=4;
    }
    if(value.q12=="always"){
      this.sum+=5;
    }


    if(value.q13=="never"){
      this.sum+=1;
    }
    if(value.q13=="low"){
      this.sum+=2;
    }
    if(value.q13=="medium"){
      this.sum+=3;
    }
    if(value.q13=="high"){
      this.sum+=4;
    }
    if(value.q13=="always"){
      this.sum+=5;
    }


    if(value.q14=="never"){
      this.sum+=1;
    }
    if(value.q14=="low"){
      this.sum+=2;
    }
    if(value.q14=="medium"){
      this.sum+=3;
    }
    if(value.q14=="high"){
      this.sum+=4;
    }
    if(value.q14=="always"){
      this.sum+=5;
    }


    if(value.q15=="never"){
      this.sum+=1;
    }
    if(value.q15=="low"){
      this.sum+=2;
    }
    if(value.q15=="medium"){
      this.sum+=3;
    }
    if(value.q15=="high"){
      this.sum+=4;
    }
    if(value.q15=="always"){
      this.sum+=5;
    }



    if(value.q16=="never"){
      this.sum+=1;
    }
    if(value.q16=="low"){
      this.sum+=2;
    }
    if(value.q16=="medium"){
      this.sum+=3;
    }
    if(value.q16=="high"){
      this.sum+=4;
    }
    if(value.q16=="always"){
      this.sum+=5;
    }



    if(value.q17=="never"){
      this.sum+=1;
    }
    if(value.q17=="low"){
      this.sum+=2;
    }
    if(value.q17=="medium"){
      this.sum+=3;
    }
    if(value.q17=="high"){
      this.sum+=4;
    }
    if(value.q17=="always"){
      this.sum+=5;
    }



    if(value.q18=="never"){
      this.sum+=1;
    }
    if(value.q18=="low"){
      this.sum+=2;
    }
    if(value.q18=="medium"){
      this.sum+=3;
    }
    if(value.q18=="high"){
      this.sum+=4;
    }
    if(value.q18=="always"){
      this.sum+=5;
    }



    if(value.q19=="never"){
      this.sum+=1;
    }
    if(value.q19=="low"){
      this.sum+=2;
    }
    if(value.q19=="medium"){
      this.sum+=3;
    }
    if(value.q19=="high"){
      this.sum+=4;
    }
    if(value.q19=="always"){
      this.sum+=5;
    }




    if(value.q20=="never"){
      this.sum+=1;
    }
    if(value.q20=="low"){
      this.sum+=2;
    }
    if(value.q20=="medium"){
      this.sum+=3;
    }
    if(value.q20=="high"){
      this.sum+=4;
    }
    if(value.q20=="always"){
      this.sum+=5;
    }



    if(value.q21=="never"){
      this.sum+=1;
    }
    if(value.q21=="low"){
      this.sum+=2;
    }
    if(value.q21=="medium"){
      this.sum+=3;
    }
    if(value.q21=="high"){
      this.sum+=4;
    }
    if(value.q21=="always"){
      this.sum+=5;
    }




    if(value.q22=="never"){
      this.sum+=1;
    }
    if(value.q22=="low"){
      this.sum+=2;
    }
    if(value.q22=="medium"){
      this.sum+=3;
    }
    if(value.q22=="high"){
      this.sum+=4;
    }
    if(value.q22=="always"){
      this.sum+=5;
    }




    if(value.q23=="never"){
      this.sum+=1;
    }
    if(value.q23=="low"){
      this.sum+=2;
    }
    if(value.q23=="medium"){
      this.sum+=3;
    }
    if(value.q23=="high"){
      this.sum+=4;
    }
    if(value.q23=="always"){
      this.sum+=5;
    }




    if(value.q24=="never"){
      this.sum+=1;
    }
    if(value.q24=="low"){
      this.sum+=2;
    }
    if(value.q24=="medium"){
      this.sum+=3;
    }
    if(value.q24=="high"){
      this.sum+=4;
    }
    if(value.q24=="always"){
      this.sum+=5;
    }



    if(value.q25=="never"){
      this.sum+=1;
    }
    if(value.q25=="low"){
      this.sum+=2;
    }
    if(value.q25=="medium"){
      this.sum+=3;
    }
    if(value.q25=="high"){
      this.sum+=4;
    }
    if(value.q25=="always"){
      this.sum+=5;
    }

console.log("total:",this.sum);

let userid=localStorage.getItem("user");
this.datacentre.setResult({userid:userid,testscore:this.sum}).subscribe(data=>{
  console.log("coming after result:",data);
  this.router.navigate(['/dashboard/mainPage']);
  
});


    
    

    
  }

  

}
