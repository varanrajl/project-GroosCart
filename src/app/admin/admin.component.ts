import { Component } from '@angular/core';
import { FormGroup, FormControl,FormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { HttpClient } from  '@angular/common/http';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  loginForm:any;
  constructor(private http:ApiService,private router:Router,private ht: HttpClient ){

  }
ngOnInit(){
  this.loginForm=new FormGroup({
  email:new FormControl(),
  password:new FormControl()
  })
}

loginget(){
  this.http.GetAdmin().
  subscribe(res=>{
const user=res.find((a:any)=>{
  return a.email===this.loginForm.value.email && a.password===this.loginForm.value.password;
});
if(user){
  alert('login success');
  this.loginForm.reset();
  this.router.navigate(['addretail']);
}else{
  alert('user not Found');
}
  },err=>{
    alert('something went wrong');

  })
}
}

