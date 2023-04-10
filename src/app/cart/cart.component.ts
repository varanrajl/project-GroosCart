import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ApiService } from '../api.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public cart : any = [];
  public grandTotal !: number;
  constructor(private cartService : CartService, private apiservice : ApiService ) { }


  ngOnInit(): void {


    this.cartService.getProducts()
    .subscribe(res=>{
      this.cart = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })
  }
  removeItem(item: any){
    this.cartService.removeCartItem(Title);
  }
  emptycart(){
    this.cartService.removeAllCart();
  }
}
