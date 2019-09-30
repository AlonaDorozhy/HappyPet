import { controllerProduct } from '../components/Products/ControllerProduct.js';
import { controllerSearch } from '../components/Search/ControllerSearch.js';
import { controllerCart} from '../components/Cart/ControllerCart.js';

class Singleton {
  constructor() {
    if (!!Singleton.instance) {
      return Singleton.instance;
    }

    Singleton.instance = this;

    this.arrAllProds;
    this.searchByNameStatus = false;

    this.product = new controllerProduct(this);
    this.search = new controllerSearch(this);
    this.cart = new controllerCart(this);

    return this;
  }
}

const storage = new Singleton();
