import { Component, OnInit } from '@angular/core';
import { ProductService } from './products/product.service';
import { CustomerService } from './customer/customer.service';
import {RegisterService} from './register/register.service';
import {LoginService} from './login/login.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
     templateUrl:'app.component.html',
     styleUrls: ['app.component.css'],

     

    // template: `
    //     <div>
    //     <nav class='navbar navbar-default'>
    //         <div class='container'>
    //         <div class="navbar-header">            
    //             <a class="navbar-brand" routerLink="/"><img style="max-width:100px; margin-top: -7px; max-height:40px" src="./app/assets/images/logo.png" alt="Angular Spree"></a>
    //         </div>
                
    //                 <ul class='nav navbar-nav'>
    //                     <li><a routerLink="/welcome" routerLinkActive="active">Home</a></li>
    //                     <li><a routerLink="/products" routerLinkActive="active">Products</a></li>
    //                     <li><a routerLink="/customer" routerLinkActive="active">Customer</a></li>
    //                     <li><a routerLink="/register" routerLinkActive="active">Register</a></li>
    //                     <li><a routerLink="/login" routerLinkActive="active">Login</a></li>
    //                 </ul>
    //         </div>
    //     </nav>
    // </div>
    // <div class='container'>
    //     <router-outlet></router-outlet>
    // </div>
    // `,
    providers: [ProductService, CustomerService, RegisterService, LoginService]
})
export class AppComponent implements OnInit {
    pageTitle: string = 'VePark';
    //islogin: boolean = true;

constructor(private router: Router) {
    
}

    // show(): void{
    //     this.islogin = this.router.url.includes('login');
    // }

    ngOnInit(){
        //this.show();
    }
    
 }
