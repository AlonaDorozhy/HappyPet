import viewCart from './ViewCart.js';
import modelCart from './ModelCart.js';

export  class controllerCart {
  constructor(storage) {
    this.storage = storage;
    this.model = new modelCart(this);
    this.view = new viewCart(this);
    this.buildCart();

  }

  // beginFilterProcess() {
  //   this.model.beginFilterProcess();
  // }
  


buildCart() {
  this.model.getAnimals().then((dd) => {
    this.storage.arrAllProds = dd;
    // console.log(dd);
    this.getItchBtn(dd)
    this.buildOrderCart(dd)
  })
}
  
  getItchBtn(data) {
    // this.model.getItchBtn(data);
  }

  BtnInfo(prodArr) {
    this.model.BtnInfo(prodArr);
  }

  buildOrderCart(prodArr) {
    this.view.buildOrderCart(prodArr);
  }
  // getItemInfo(){
  //   console.log("HYU");
  //   this.model.getItemInfo();
  // }
}