import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { HttpClientModule } from  '@angular/common/http';
import { ProductComponent } from './product/product.component';
import { AddretailComponent } from './addretail/addretail.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule} from '@angular/material/icon';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule} from '@angular/material/list';
import { MatButtonModule} from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { RetailloginComponent } from './retaillogin/retaillogin.component';
import { FilterPipe } from './filter.pipe';
import { ShowComponent } from './show/show.component';
import { CartComponent } from './cart/cart.component';
import { TestComponent } from './test/test.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    AdminComponent,
    ProductComponent,
    AddretailComponent,
    RetailloginComponent,
    FilterPipe,
    ShowComponent,
    CartComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatIconModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatDividerModule,
    MatInputModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
