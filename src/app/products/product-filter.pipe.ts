import {Pipe, PipeTransform} from '@angular/core';
import {IProduct} from './product';


@Pipe({
    name: 'productFilter',
    pure: false
})


export class ProductFilterPipe implements PipeTransform {

    transform(value: IProduct[], args: string): IProduct[] {
        let filtr: string = args ? args.toLocaleLowerCase() : null;
        return filtr ? value.filter((product: IProduct) =>
            product.productName.toLocaleLowerCase().indexOf(filtr) !==  -1) : value;
    }

}