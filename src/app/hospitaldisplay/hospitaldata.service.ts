import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HospitaldataService {
  getUrl:string="https://2d6e7690.ngrok.io/api/Settings/GetDesignations";
  insertUrl:string="https://2d6e7690.ngrok.io/api/Settings/InsUpdateDesignation";
  delUrl:string="https://2d6e7690.ngrok.io/api/Settings/DeleteDesignation?DesignationId="
  constructor(private http:HttpClient) { }

  getAllData(){
    return this.http.get(this.getUrl);
  }
  getById(id){
    return this.http.get(this.getAllData+id);
  }
getInsertData(newuser){
  console.log(newuser);
  let head=new HttpHeaders().set("Content-Type","application/json");
  let body=JSON.stringify(newuser);
  return this.http.post(this.insertUrl, body,{headers:head});

}

getDeleteData(DesignationId){
  let head=new HttpHeaders().set("Content-Type","application/json");
  return this.http.post(this.delUrl+DesignationId,{headers:head});

}

getEditData(newuser){
  let head=new HttpHeaders().set("Content-Type","application/json");
  let body=JSON.stringify(newuser);
  return this.http.post(this.insertUrl+newuser.id, body,{headers:head});
}

}
