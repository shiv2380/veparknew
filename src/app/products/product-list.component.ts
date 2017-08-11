import  {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';


import {IProduct} from './product';
import {ProductService} from './product.service';


@Component({
    templateUrl: 'product-list.component.html',
    styleUrls: ['product-list.component.css']
})

export class ProductListComponent implements OnInit{
    pageTitle: string = 'Products List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string;
    products: IProduct[];
    errorMsg: string;
    
    constructor(private _productService: ProductService, private router: Router){
        
    }

toggleImage(): void {
    this.showImage = !this.showImage;
}

onSelect(hero: IProduct) {
    this.router.navigate(['/product', hero.productId]);
  }

ngOnInit(): void{
    this._productService.getProducts()
        .subscribe(products => this.products = products,
        error => this.errorMsg = <any>error);
}
}