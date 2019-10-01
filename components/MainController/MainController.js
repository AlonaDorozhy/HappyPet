import { controllerProduct } from '../Products/ControllerProduct.js';
import { controllerSearch } from '../Search/ControllerSearch.js';
import { controllerCart} from '../Cart/ControllerCart.js';


export class MainController {
  constructor() {

    this.product = new controllerProduct(this);
    this.search = new controllerSearch(this);
    this.cart = new controllerCart(this);



    return this;
  
}

}
  