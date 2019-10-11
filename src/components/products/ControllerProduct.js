import { ModelProduct } from './ModelProduct.js'
import { ViewProduct } from './ViewProduct.js'


export class ControllerProduct {
  constructor(observer) {
    this.observer = observer;
    this.model = new ModelProduct(this);
    this.view = new ViewProduct(this); 

    this.buildAllProducts();
 
  }

  buildAllProducts() {
 
    this.products = this.model.getAllProducts()
    this.findDomPlace(this.products);
    // this.buildProductList(this.prod);
  
  }
  findDomPlace(prodArr){
    this.view.findDomPlace(prodArr)
  }
  // buildProductList(prodArr) {
  //   this.view.buildProductList(prodArr);
  // }

}

