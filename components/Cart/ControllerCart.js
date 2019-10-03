import viewCart from './ViewCart.js';
import modelCart from './ModelCart.js';

export  class controllerCart {
  constructor(storage) {
    this.storage = storage;
    this.model = new modelCart(this);
    this.view = new viewCart(this);
    this.buildCart();

  }


buildCart() {
  this.model.getAnimals().then((dd) => {
    this.storage.arrAllProds = dd;
    this.getItchBtn(dd)
    // this.buildProductCart(dd)
    this.buildOrderCart(dd)
  })
}
  
  getItchBtn(data) {
    
  }

  BtnInfo(prodArr) {
    this.model.BtnInfo(prodArr);
  }

  buildOrderCart(prodArr) {
    this.view.buildOrderCart(prodArr);
  }

   buildProductCart(data, item) {
     this.view.buildProductCart(data, item);
  }
 
}