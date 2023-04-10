import { Component } from '@angular/core';
import { FormGroup, FormControl,FormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { HttpClient } from  '@angular/common/http';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-retaillogin',
  templateUrl: './retaillogin.component.html',
  styleUrls: ['./retaillogin.component.css']
})
export class RetailloginComponent implements OnInit {
/*

  loginForm:any;
  constructor(private http:ApiService,private router:Router,private ht: HttpClient ){

  }
ngOnInit(){
  this.loginForm=new FormGroup({
    EmailId:new FormControl(),
  Password:new FormControl()
  })
}

loginget(){
  this.http.GetVendor().
  subscribe(res=>{
const user=res.find((a:any)=>{
  return a.EmailId===this.loginForm.value.EmailId && a.Password===this.loginForm.value.Pass
});
if(user){
  alert('login success');
  this.loginForm.reset();
  this.router.navigate(['product']);
}else{
  alert('user not Found');
}
  },err=>{
    alert('something went wrong');

  })
}
}
 */

public vendorlogin:FormGroup;

constructor(private apiservice:ApiService,
    private formBuilder:FormBuilder,
    private http:HttpClient,
    private router:Router
    ) { }

  ngOnInit(): void {

    this.vendorlogin = this.formBuilder.group({
      EmailId:[''],
      Password:['']
    })

  }

  login(){

    this.http.get<any>("http://localhost:3402/api/Vendor/getVendor")
    .subscribe(res=>{
      const token = res.find((a:any)=>{
        return a.EmailId === this.vendorlogin.value.EmailID && a.Password === this.vendorlogin.value.Pass
      });
      if (token){
        localStorage.setItem('token',token.EmailID)
        alert ("Login Success!!");
        this.vendorlogin.reset();
        this.router.navigate(['product'])
      }else{
        alert("user not found");
      }
    },err=>{
      alert("something went wrong!!")
    })
  }
}
