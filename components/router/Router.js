import { controllerProduct } from '../products/ControllerProduct.js';
import { controllerSearch } from '../search/ControllerSearch.js';
import { controllerCart} from '../cart/ControllerCart.js';
import { controllerSorting} from '../sorting/ControllerSorting.js';
import {controllerCategory} from '../category/ControllerCategory.js';

export class routerController {
  constructor() {

    this.product = new controllerProduct(this);
    this.search = new controllerSearch(this);
    this.cart = new controllerCart(this);
    this.sorting = new controllerSorting(this);
    this.category = new controllerCategory(this);

    return this;
  
}

}
  