import { modelCategory } from './ModelCategory.js';
import { viewCategory } from './ViewCategory.js';


export class controllerCategory {
  constructor(storage) {

    this.storage = storage;
    this.model = new modelCategory(this);
    this.view = new viewCategory(this);
  }

  beginCategorySorting() {
    this.model.beginCategorySorting();
  }

  buildProductList(prodArr) {
    this.storage.product.buildProductList(prodArr);
  }

  getSearchValue() {
    return this.view.getSearchValue();
  }

}

