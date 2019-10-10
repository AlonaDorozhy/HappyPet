import { controllerProduct } from './components/products/ControllerProduct.js';
import { controllerSearch } from './components/search/ControllerSearch.js';
import { controllerCart } from './components/cart/ControllerCart.js';
import { controllerSorting } from './components/sorting/ControllerSorting.js';
import { controllerCategory } from './components/category/ControllerCategory.js';
import { controllerFilter } from './components/filter/ControllerFilter.js';
import { Observer } from './components/observer.js';
import InitialController from './components/InitialController.js';
export default class routerController {
    constructor() {

        // this.product = new controllerProduct(this);
        // this.search = new controllerSearch(this);
        // this.category = new controllerCategory(this);
        // this.cart = new controllerCart(this);
        // this.sorting = new controllerSorting(this);
        // this.filter = new controllerFilter(this);
        this.initial = new InitialController(this.observer)
        this.observer = new Observer();
        return this;

    }

}
