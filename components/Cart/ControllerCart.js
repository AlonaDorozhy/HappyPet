import viewCart from './ViewCart.js';
import modelCart from './ModelCart.js';

export  class controllerCart {
  constructor(storage) {
    this.storage = storage;
    this.model = new modelCart(this);
    this.view = new viewCart(this);
    this.buildOrderCart();
  }


  buildOrderCart() {
    this.model.getOrderCart().then((dd) => {
      this.storage.arrAllProds = dd;
      // this.buildOrderList(dd);
    });
  }

  // buildOrderList(prodArr) {
  //   this.view.buildOrderList(prodArr);
  // }

}