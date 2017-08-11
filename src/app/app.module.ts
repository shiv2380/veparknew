import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';

import { Angular2SocialLoginModule } from "angular2-social-login";

import { AppComponent }  from './app.component';
import { ProductListComponent }  from './products/product-list.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductFilterPipe } from './products/product-filter.pipe';
import { StarComponent } from './shared/star.component';
import { ProductDetailComponent } from './products/product-detail.component';

import {CustomerListComponent} from './customer/customer-list.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {HeaderComponent} from './layout/header/header.component';
import {FooterComponent} from './layout/footer/footer.component';
import {ProfileDropdownComponent} from './layout/header/profile-dropdown/profile-dropdown.component';
import {GooglePlaceModule} from './directives/index';

import { AlertModule } from 'ngx-bootstrap';

let providers = {
    "google": {
      "clientId": "288376891644-vpl2t495nhia332r2ju8bdkgc941qe72.apps.googleusercontent.com"
    },
    // "linkedin": {
    //   "clientId": "LINKEDIN_CLIENT_ID"
    // },
    "facebook": {
      "clientId": "1767042913322871",
      "apiVersion": "v2.4"
    }
  };

const appRoutes: Routes = [
    { path: 'product/:id', component: ProductDetailComponent},
    { path: 'welcome', component: WelcomeComponent},
    { path: '', component: WelcomeComponent},
    { path: 'products', component: ProductListComponent},
    { path: 'customer', component: CustomerListComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [ BrowserModule, AlertModule.forRoot(), Angular2SocialLoginModule, HttpModule, FormsModule, Ng2Bs3ModalModule,
  GooglePlaceModule, RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent,
  ProductListComponent, ProductFilterPipe, StarComponent, ProductDetailComponent, WelcomeComponent, CustomerListComponent,
  RegisterComponent, LoginComponent, HeaderComponent, ProfileDropdownComponent, FooterComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { 
  /**
   *
   */
  constructor() {}
}

Angular2SocialLoginModule.loadProvidersScripts(providers);