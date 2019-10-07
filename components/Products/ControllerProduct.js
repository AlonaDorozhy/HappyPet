import { modelProduct } from './ModelProduct.js'
import { viewProduct } from './ViewProduct.js'
// import {Template} from './Template.js'

class controllerProduct {
  constructor(storage) {
    this.storage = storage;
    this.model = new modelProduct(this);
    this.view = new viewProduct(this);
 
    this.buildAllProducts();
  }


  buildAllProducts() {
    this.prod = this.model.getAllProducts()
    this.storage.arrAllProds = this.prod
    this.storage.arrAllProds = this.prod
  
    this.buildProductList(this.prod);
  }

  buildProductList(prodArr) {
    this.view.buildProductList(prodArr);
  }

}

export { controllerProduct }