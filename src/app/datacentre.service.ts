import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatacentreService {
  private url:string="http://localhost:8001/api";
  constructor(private http:HttpClient) { }
  addNewUser(newUser):Observable<any>{
    console.log("newUSer:",newUser);
    return this.http.post<any>(this.url+"/user",newUser);
  }
  addNewLogin(newLogin):Observable<any>{
    return this.http.post<any>(this.url+"/login",newLogin);
  }
  checkAuth(newInput):Observable<any>{
    console.log("input",newInput);
    return this.http.post<any>(this.url+"/loginAuth",newInput);
  }
  getUserDetailfromId(userid):Observable<any>{
    return this.http.get<any>(this.url+'/userbyid/'+userid);
  }
  checkOnceGivenTest(id):Observable<any>{
    return this.http.get<any>(this.url+'/checkOnceGivenTest/'+id);
  }
  setResult(result):Observable<any>{
    console.log("for post result:",result);
    
    return this.http.post<any>(this.url+"/result",result);
  }
  findLastTestGivenById(id):Observable<any>{
    return this.http.get<any>(this.url+"/findLastTestGivenById/"+id);
  }
}
