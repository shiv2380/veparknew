import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import {Response, Headers, RequestOptions} from '@angular/http';

import { ICustomer } from './customer';
import { CustomerService } from './customer.service';


@Component({
    templateUrl: 'customer-list.component.html'
    //styleUrls: ['app/products/product-list.component.css']
})

export class CustomerListComponent implements OnInit {
    @ViewChild('modal')
    modal: ModalComponent;

    pageTitle: string = 'Customers List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string;
    products: ICustomer[];
    errorMsg: string;
    userName: string = 'shiv';

    constructor(private _productService: CustomerService, private router: Router) {

    }

    close() {
        this.modal.close();
        this.router.navigate(['/login']);
    }

    open() {
        this.modal.open();
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    onClick(): void {
        sessionStorage.removeItem('accesstoken');
        sessionStorage.removeItem('userName');
        this.router.navigate(['/login']);
    }

    // onSelect(hero: ICustomer) {
    //     this.router.navigate(['/product', hero.productId]);
    //   }

    onButtonGetClick() {
        if (sessionStorage.getItem('accesstoken') == null) {
            this.open();
        }
        this._productService.getCustomers()
            .subscribe(products => this.products = products,
            error => this.handleError(error));
    }

    onButtonClearClick() {
        //this.products.slice(0, this.products.length);
        this.products = null;
    }

    handleError(err: Response): void {
        if (err.status == 401) {
            this.open();
        }
    }

    ngOnInit(): void {
        if (sessionStorage.getItem('accesstoken') == null) {
            this.router.navigate(['/login']);
        }

        this.userName = sessionStorage.getItem('userName');
        // this._productService.getCustomers()
        //     .subscribe(products => this.products = products,
        //     error => this.errorMsg = <any>error);
    }
}