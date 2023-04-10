import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from  '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  nodeApi1Url="http://localhost:3402/api/signup/";

  nodeApi2Url="http://localhost:3402/api/Vendor/";

  nodeApiUrl="http://localhost:3402/api/Products/";


  constructor(private http:HttpClient) { }

  AddRegister(signup:any){

    const header={headers:new HttpHeaders({'content-type':'application/json'})};
  return this.http.post<any>(this.nodeApi1Url+'create',signup,header);
  }


GetRegister(){
  return this.http.get<any>(this.nodeApi1Url+'getsignup');
}

GetAdmin(){
  return this.http.get<any>("http://localhost:3402/api/admin/getadmin");
}

AddVendor(Vendor:any):Observable<any>{

  const header={headers:new HttpHeaders({'content-type':'application/json'})};
return this.http.post<any>(this.nodeApi2Url+'create',Vendor,header);
}

GetVendor(){
  return this.http.get<any>(this.nodeApi2Url+'getVendor');
}

DeleteVendor(Id:any){
  const options = { headers: new HttpHeaders({'content-type':'application/json'}),
body: { _id: Id}
};
  return this.http.delete<any>(this.nodeApi2Url+'delete',options);
}

UpdateVendor(data :any,Id:any){
  debugger;
  const header={headers:new HttpHeaders({'Content-Type':'application/json'})};
  return this.http.post<any>(this.nodeApi2Url+'update',data,header);
};

GetVendorfromprojectAPI(){
  return this.http.get<any>(this.nodeApi2Url+'getVendor');

}



AddProducts(Products:any):Observable<any>{

  const header={headers:new HttpHeaders({'content-type':'application/json'})};

return this.http.post<any>(this.nodeApiUrl+'create',Products,header);
}

  GetProducts(){
    return this.http.get<any>(this.nodeApiUrl+'getProduts');
  }

deleteProducts(id:any){
  const options = { headers: new HttpHeaders({'content-type':'application/json'}),
body: { _id: id}
};
  return this.http.delete<any>(this.nodeApiUrl+'delete',options);
}

UpdateProducts(data :any,id:number){
  return this.http.post<any>("http://localhost:3402/api/Products/update",data)
  .pipe(map((res:any)=>{return res;}))
}



GetProductsfromprojectApi(){
  return this.http.get<any>(this.nodeApiUrl+'getProducts');
}

}

