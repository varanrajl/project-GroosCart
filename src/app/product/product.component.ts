import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  newproduct:FormGroup;


  productsModelObj : productsdata = new productsdata;

  showAdd : boolean;
  showupdate : boolean;
  productsdata: any[];

  constructor(
    private formBuilder : FormBuilder,
    public apiService:ApiService,
    private http:HttpClient) { }

  ngOnInit(): void {



    this.newproduct=new FormGroup({
      image :new FormControl(),
      name :new FormControl(),
      description :new FormControl(),
      category :new FormControl(),
      price :new FormControl()
    })

    this.newproduct = this.formBuilder.group({
      image:['', Validators.required],
      name:['', Validators.required],
      description:['', Validators.required],
      category:['', Validators.required],
      price:['', Validators.required],
    })
this.getAllProducts();
    }

  clickAddProducts(){
    this.newproduct.reset();
    this.showAdd=true;
    this.showupdate=false;

  }
  get Check(){  return this.newproduct.controls;  }

  AddProductsDetails(){
    if(this.newproduct.invalid){
      alert('Invalid Data...!!!');
    }else{
    this.productsModelObj.image=this.newproduct.value.image;
    this.productsModelObj.name=this.newproduct.value.name;
    this.productsModelObj.description=this.newproduct.value.description;
    this.productsModelObj.category=this.newproduct.value.category;
    this.productsModelObj.price=this.newproduct.value.price;

    this.apiService.AddProducts(this.productsModelObj).subscribe(res=>{
      console.log(res);
      alert("Product Added Successfully");
      let ref = document.getElementById('cancel')
      ref?.click();
      this.newproduct.reset();
      this.getAllProducts();
    }
    , err=>{
      alert("Somethig Went Wrong")
    })}
  }
getAllProducts(){
  this.apiService.GetProducts().subscribe(res=>{
    this.productsdata = res;
  })
}

OnDelete(id){
      this.apiService.deleteProducts(id).subscribe(
        ()=>{
          alert('Deleted...!!!');
          this.ngOnInit();
          this.getAllProducts();
        }

      );
    }

    onEdit(row:any){
      this.showAdd=false;
      this.showupdate=true;
      this.productsModelObj._id = row._id;
      this.newproduct.controls['image'].setValue(row.image);
      this.newproduct.controls['name'].setValue(row.name);
      this.newproduct.controls['description'].setValue(row.description);
      this.newproduct.controls['category'].setValue(row.category);
      this.newproduct.controls['price'].setValue(row.price);
    }
      UpdateProducts(){
        this.productsModelObj.image=this.newproduct.value.image;
        this.productsModelObj.name=this.newproduct.value.name;
        this.productsModelObj.description=this.newproduct.value.description;
        this.productsModelObj.category=this.newproduct.value.category;
        this.productsModelObj.price=this.newproduct.value.price;

      this.apiService.UpdateProducts(this.productsModelObj, this.productsModelObj._id)
      .subscribe(res=>{
        alert("Updated Successfully");
        let ref = document.getElementById('cancel')
      ref?.click();
          this.newproduct.reset();
          this.getAllProducts();
      });
    }
  }
export class productsdata
{
  _id :number=0;
  image : String;
  name : String;
  description : String;
  category : String;
  price : Number
  
}
