import {Injectable} from '@angular/core';
import {ICustomer} from './customer';
import {Observable} from 'rxjs/rx';
import {URLSearchParams, Http, Response, Headers, RequestOptions} from '@angular/http';

@Injectable()

export class CustomerService {
    private _customerUrl = 'http://localhost:50684/api/customer/';

    constructor(private _http: Http) {
    }

    getCustomers(): Observable<ICustomer[]> {
         let headers = new Headers({ 'Authorization': 'Bearer ' + sessionStorage.getItem('accesstoken')});
        let options = new RequestOptions({ headers: headers });
        
        return this._http.get(this._customerUrl, options)
                .map((response: Response) => <ICustomer[]>response.json())
                //.do(data => console.log(JSON.stringify(data)))
                .catch(this.handleError);
    }

    getProduct(id: number): Observable<ICustomer> {

        // let pms: URLSearchParams = new URLSearchParams();

        // pms.set('productId', id.toString());

        // return this._http.get(this._productUrl, {search: pms})
        //         .map((response: Response) => <IProduct>response.json())
        //         .do(data => console.log(JSON.stringify(data)))
        //         .catch(this.handleError);

        return this.getCustomers()
            .map((products: ICustomer[]) => products.find(p => p.id === id));
    }

    private handleError(err: Response){
        console.error(err);
        return Observable.throw(err);
    }
}