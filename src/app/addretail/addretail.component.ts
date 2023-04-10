import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,FormControl,Validators } from '@angular/forms';
import { HttpClient } from  '@angular/common/http';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-addretail',
  templateUrl: './addretail.component.html',
  styleUrls: ['./addretail.component.css']
})
export class AddretailComponent implements OnInit {

  Vendor:FormGroup;

  vendorModelObj : vendorlist = new vendorlist;


showAdd : boolean;
showupdate : boolean;

public vendorlist :any[];

  constructor(
    public apiservice:ApiService,
    private formBuilder:FormBuilder,
    private http:HttpClient) { }

  ngOnInit() :void {

    this.Vendor=new FormGroup({
      Shopname:new FormControl(),
      Vendorname:new FormControl(),
      EmailID:new FormControl(),
      Mobileno:new FormControl(),
      Pass:new FormControl(),
      Cpass: new FormControl(),
      Ad:new FormControl(),
      Gst:new FormControl()
    });

    this.Vendor = this.formBuilder.group({
      Shopname:['', Validators.required],
      Vendorname:['', Validators.required],
      EmailID:['', [Validators.required, Validators.pattern("[^@]*@[^@]*")]],
      Mobileno:['', [Validators.required, Validators.minLength(10)]],
      Pass:['', Validators.required],
      Ad:['', Validators.required]
    });
    this.getAllVendor();

  }
  Addvendor(){
    this.Vendor.reset();
    this.showAdd=true;
    this.showupdate=false;
  }

  get Check(){  return this.Vendor.controls;  }


AddvendorDetails(){
  if(this.Vendor.invalid){
    alert('Invalid Data...!!!');
  }else{

  this.vendorModelObj.Shopname=this.Vendor.value.Shopname;
  this.vendorModelObj.Vendorname=this.Vendor.value.Vendorname;
  this.vendorModelObj.EmailID=this.Vendor.value.EmailID;
  this.vendorModelObj.Mobileno=this.Vendor.value.Mobileno;
  this.vendorModelObj.Pass=this.Vendor.value.Pass;
  this.vendorModelObj.Cpass=this.Vendor.value.Cpass;
  this.vendorModelObj.Ad=this.Vendor.value.Ad;
  this.vendorModelObj.Gst=this.Vendor.value.Gst;

  this.apiservice.AddVendor(this.vendorModelObj).subscribe(res=>{
    console.log(res);
    alert("Vendor Added Successfully");
    let ref = document.getElementById('cancel')
      ref?.click();
    this.Vendor.reset();
    this.getAllVendor();
  }
  , err=>{
    alert("Somethig Went Wrong")
  })}
}
getAllVendor(){
  this.apiservice.GetVendor().subscribe(res=>{
    this.vendorlist = res;
  })
}

OnDelete(id){
  this.apiservice.DeleteVendor(id).subscribe(
    ()=>{
      alert('Deleted...!!!');
      this.ngOnInit();
      this.getAllVendor();
    }
  );}

  onEdit(row:any){
    this.showAdd=false;
    this.showupdate=true;
    this.vendorModelObj._id = row._id;
    this.Vendor.controls['Shopname'].setValue(row.Shopname);
    this.Vendor.controls['Vendorname'].setValue(row.Vendorname);
    this.Vendor.controls['EmailID'].setValue(row.EmailID);
    this.Vendor.controls['Mobileno'].setValue(row.Mobileno);
    this.Vendor.controls['Pass'].setValue(row.Pass);
    this.Vendor.controls['Cpass'].setValue(row.Cpass);
    this.Vendor.controls['Ad'].setValue(row.Ad);
    this.Vendor.controls['Gst'].setValue(row.Gst);
  }
    updateVendor(){
      debugger;
      this.vendorModelObj.Shopname=this.Vendor.value.Shopname;
      this.vendorModelObj.Vendorname=this.Vendor.value.Vendorname;
      this.vendorModelObj.EmailID=this.Vendor.value.EmailID;
      this.vendorModelObj.Mobileno=this.Vendor.value.Mobileno;
      this.vendorModelObj.Pass=this.Vendor.value.Pass;
      this.vendorModelObj.Cpass=this.Vendor.value.Cpass;
      this.vendorModelObj.Ad=this.Vendor.value.Ad;
      this.vendorModelObj.Gst=this.Vendor.value.Gst;

    this.apiservice.UpdateVendor(this.vendorModelObj,this.vendorModelObj._id)
    .subscribe(()=>{
      alert("Updated Successfully");
      let ref = document.getElementById('cancel')
      ref?.click();
        this.Vendor.reset();
        this.getAllVendor();
    });
  };




}

export class vendorlist
{
  _id :number=0;
    Shopname: String;
    Vendorname: String;
    EmailID: String;
    Mobileno: Number;
    Pass: String;
    Cpass:String;
    Ad:String;
    Gst:String;
}
