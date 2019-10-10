import { modelProduct } from './ModelProduct.js'
import { viewProduct } from './ViewProduct.js'
// import {Template} from './Template.js'

class controllerProduct {
  constructor(observer) {
    console.log(observer);
    this.observer = observer;
    this.model = new modelProduct(this);
    this.view = new viewProduct(this);
    this.buildAllProducts();
  }
 

  buildAllProducts() {
    this.data = this.model.setAllProducts()
    this.prod = this.model.getAllProducts()
    this.storage.arrAllProds = this.data
    this.buildProductList(this.prod);
  }

  buildProductList(prodArr) {
    this.view.buildProductList(prodArr);
  }

}

export { controllerProduct }