import {Injectable} from '@angular/core';
import {IUser} from './register';
import {Observable} from 'rxjs/rx';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
//import { Observable } from 'rxjs/Observable';

@Injectable()

export class RegisterService {
    private _customerUrl = 'https://localhost:44395/api/account/register';

    constructor(private http: Http) {
    }

    addUser(user: IUser): Observable<IUser> {

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this._customerUrl, user, options)
                .map(this.extractData)
                //.do(data => console.log(JSON.stringify(data)))
                .catch(this.handleError);
    }

    private handleError(error: Response){
        //console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }


    // private createProduct(product: IProduct, options: RequestOptions): Observable<IProduct> {
    //     product.id = undefined;
    //     return this.http.post(this.baseUrl, product, options)
    //         .map(this.extractData)
    //         .do(data => console.log('createProduct: ' + JSON.stringify(data)))
    //         .catch(this.handleError);
    // }

    // private updateProduct(product: IProduct, options: RequestOptions): Observable<IProduct> {
    //     const url = `${this.baseUrl}/${product.id}`;
    //     return this.http.put(url, product, options)
    //         .map(() => product)
    //         .do(data => console.log('updateProduct: ' + JSON.stringify(data)))
    //         .catch(this.handleError);
    // }

    private extractData(response: Response) {
        let body = response.json();
        return body.data || {};
    }
}