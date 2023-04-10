import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm:any;
 constructor(private http:ApiService,private router:Router){

 }


  ngOnInit() {
this.signupForm=new FormGroup({
  Fullname:new FormControl('',[Validators.required,Validators.minLength(3)]),
  mobile:new FormControl('',[Validators.required]),
  email:new FormControl('',[Validators.required]),
  password:new FormControl('',[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,15}')])
})

  }
  signUp(signup:any){
this.http.AddRegister(signup).subscribe(res=>{
alert('signup successfully')
this.router.navigate(['login']);
},err=>{
  alert('something went wrong');

})
  }
/*
  get getControl(){
    return this.signupForm.value.controls;
  } */

  get firstname(){return this.signupForm.get('Fullname');}

  get Mobile(){return this.signupForm.get('mobile');}

  get Email(){return this.signupForm.get('email');}

  get Password(){return this.signupForm.get('password');}

}



