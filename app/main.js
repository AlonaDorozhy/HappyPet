import { controllerProduct } from '../components/Products/ControllerProduct.js';
// import { ControllerSearch } from '../components/Search/ControllerSearch.js';

class Singleton {
  constructor() {
    if (!!Singleton.instance) {
      return Singleton.instance;
    }

    Singleton.instance = this;

    this.arrAllProds;
    // this.searchByNameStatus = false;

    this.product = new controllerProduct(this);
    // this.search = new ControllerSearch(this);

    return this;
  }
}

const storage = new Singleton();
