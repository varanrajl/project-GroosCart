import { Component,OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { HttpClient } from  '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
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
  this.ht.get<any>("http://localhost:3402/api/signup/getsignup").subscribe(res=>{
const user=res.find((a:any)=>{
  return a.email===this.loginForm.value.email && a.password===this.loginForm.value.password;
});
if(user){
  localStorage.setItem('user',user.email)
  alert('login success');
  this.loginForm.reset();
  this.router.navigate(['show']);
}else{
  alert('user not Found');
}
  },err=>{
    alert('something went wrong');

  })
}
}
