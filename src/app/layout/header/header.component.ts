import { Router } from '@angular/router';
// import { SearchActions } from './../../home/reducers/search.actions';
// import { getTaxonomies } from './../../product/reducers/selectors';
// import { getTotalCartItems } from './../../checkout/reducers/selectors';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
// import { Store } from '@ngrx/store';
// import { AppState } from '../../interfaces';
// import { getAuthStatus } from '../../auth/reducers/selectors';
import { Observable } from 'rxjs/Observable';
// import { AuthService } from '../../core/services/auth.service';
// import { AuthActions } from '../../auth/actions/auth.actions';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss']
})
export class HeaderComponent implements OnInit {
  taxonList = [{
    "id": 4,
    "name": "Mugs",
    "pretty_name": "Categories -> Mugs",
    "permalink": "categories/mugs",
    "parent_id": 1,
    "taxonomy_id": 1
  },  {
    "id": 3,
    "name": "Bags",
    "pretty_name": "Categories -> Bags",
    "permalink": "categories/bags",
    "parent_id": 1,
    "taxonomy_id": 1
  }, {
    "id": 8,
    "name": "Ruby",
    "pretty_name": "Brand -> Ruby",
    "permalink": "brand/ruby",
    "parent_id": 2,
    "taxonomy_id": 2
  }, {
     "id": 9,
    "name": "Apache",
    "pretty_name": "Brand -> Apache",
    "permalink": "brand/apache",
    "parent_id": 2,
    "taxonomy_id": 2
  }, {
    "id": 10,
    "name": "Spree",
    "pretty_name": "Brand -> Spree",
    "permalink": "brand/spree",
    "parent_id": 2,
    "taxonomy_id": 2
  }, {
    "id": 11,
    "name": "Rails",
    "pretty_name": "Brand -> Rails",
    "permalink": "brand/rails",
    "parent_id": 2,
    "taxonomy_id": 2
  }];
  
  constructor() {
  }

  ngOnInit() {
    // this.store.dispatch(this.authActions.authorize());
    // this.isAuthenticated = this.store.select(getAuthStatus);
    // this.totalCartItems = this.store.select(getTotalCartItems);
  }

  

}
