import 'rxjs/add/operator/switchMap';
import {Component, OnInit, OnDestroy} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

import {IProduct} from './product';
import {ProductService} from './product.service';

import {Subscription} from 'rxjs/Subscription';

@Component({
    templateUrl: 'product-detail.component.html'
})
export class ProductDetailComponent implements OnInit, OnDestroy {
    pageTitle: string = 'Product Detail';
    product: IProduct;
    private sub: Subscription;
    errorMessage: string;

    constructor(private route: ActivatedRoute, private router: Router,
     private productService: ProductService) {     }

    //  ngOnInit() {
    //       this.route.params
    //       .switchMap((params: Params) => 
    //       this.productService.getProduct(+params['id']))
    //       .subscribe((product: IProduct) => this.product = product);
    //  }

    //  onBack(): void{
    //      this.router.navigate(['/products']);
    //  }

    ngOnInit(): void {
        this.sub = this.route.params.subscribe(
            params => {
                let id = +params['id'];
                this.getProduct(id);
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    getProduct(id: number) {
        this.productService.getProduct(id).subscribe(
            product => this.product = product,
            error => this.errorMessage = <any>error);
    }

    onBack(): void {
        this.router.navigate(['/products']);
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product Detail: ' + message;
    }
}