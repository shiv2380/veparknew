import {Injectable} from '@angular/core';
import {IProduct} from './product';
import {Observable} from 'rxjs/rx';
import {URLSearchParams, Http, Response} from '@angular/http';

@Injectable()

export class ProductService {
    private _productUrl = 'api/products/products.json';

    constructor(private _http: Http) {
    }

    getProducts(): Observable<IProduct[]> {
        return this._http.get(this._productUrl)
                .map((response: Response) => <IProduct[]>response.json())
                .catch(this.handleError);
    }

    getProduct(id: number): Observable<IProduct> {

        // let pms: URLSearchParams = new URLSearchParams();

        // pms.set('productId', id.toString());

        // return this._http.get(this._productUrl, {search: pms})
        //         .map((response: Response) => <IProduct>response.json())
        //         .do(data => console.log(JSON.stringify(data)))
        //         .catch(this.handleError);

        return this.getProducts()
            .map((products: IProduct[]) => products.find(p => p.productId === id));
    }

    private handleError(err: Response){
        console.error(err);
        return Observable.throw(err.json().error || 'Server error');
    }
}