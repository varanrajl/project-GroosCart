import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddretailComponent } from './addretail/addretail.component';
import { AdminComponent } from './admin/admin.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { RetailloginComponent } from './retaillogin/retaillogin.component';
import { ShowComponent } from './show/show.component';
import { SignupComponent } from './signup/signup.component';
import { TestComponent } from './test/test.component';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  {path:'',redirectTo:'Home',pathMatch:'full'},
  {path:'Home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'admin',component:AdminComponent},
  {path:'product',component:ProductComponent},
  {path:'addretail',component:AddretailComponent},
  {path:'loginretail',component: RetailloginComponent},
  {path:'show',component:ShowComponent,canActivate:[AuthGuard]},
  {path:'cart',component:CartComponent},
  {path:'test',component:TestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
