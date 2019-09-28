import {modelProduct} from './ModelProduct.js'
import {viewProduct} from './ViewProduct.js'

class controllerProduct {
  constructor(storage) {
    this.storage = storage;
    this.model = new modelProduct(this);
    this.view = new viewProduct(this);
    this.buildAllProducts();
  }

  buildAllProducts() {
    this.model.getAllProducts().then((dd) => {
      this.storage.arrAllProds = dd;
      this.buildProductList(dd);
    });
  }

  buildProductList(prodArr) {
    this.view.buildProductList(prodArr);
  }

}

export { controllerProduct }