import {modelSearch} from './ModelSearch.js'
import {viewSearch} from './ViewSearch.js'



export class controllerSearch {
  constructor(storage) {
    this.storage = storage;
    this.model = new modelSearch(this);
    this.view = new viewSearch(this);

    // console.log(this.storage);
  }

  beginFilterProcess() {
    this.model.beginFilterProcess();
  }

  buildProductList(prodArr) {
    this.storage.product.buildProductList(prodArr);
  }

  getSearchValue() {
    return this.view.getSearchValue();
  }

}