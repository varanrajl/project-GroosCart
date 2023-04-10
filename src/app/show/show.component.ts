import { Component, OnInit } from '@angular/core';

import { ApiService } from 'src/app/api.service';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {


  public productdata : any ;
  public filterCategory : any;
  searchKey:string ="";

  public totalItem : number=0;
  public searchTerm !:string;

  constructor(public api : ApiService, private cartService : CartService) { }

  ngOnInit(): void {



    this.cartService.getProducts().subscribe(res=>{
      this.totalItem = res.length;
    });
    this.api.GetProducts()
    .subscribe(res=>{
      this.productdata = res;
      this.filterCategory = res;
      this.productdata.forEach((a:any) => {
        if(a.category ==="" || a.category ==="men" || a.category ===""){
          a.category =""
        }  
        Object.assign(a,{quantity:'' ,total:a.price});
      });
      console.log(this.productdata)
    });

    this.cartService.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
  }
  addtocart(item: any){
    this.cartService.addtoCart(item);
  }
  filter(category:string){
    console.log(category);
    this.filterCategory = this.productdata
    .filter((a:any)=>{
      if(a.category == category || category==''){
        return a;
      }
    })
  }

  Search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cartService.search.next(this.searchTerm);
  }
}
