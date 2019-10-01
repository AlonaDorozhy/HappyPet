import { modelSorting } from './ModelSorting.js';
import { viewSorting } from './ViewSorting.js';


export class controllerSorting{
  constructor(storage) {

    this.storage = storage;
    this.model = new modelSorting(this);
    this.view = new viewSorting(this);
  }

  beginSortingProcess() {
    this.model.beginSortingProcess();
  }

  buildProductList(prodArr) {
    this.storage.product.buildProductList(prodArr);
  }

  getSearchValue() {
    return this.view.getSearchValue();
  }

}

