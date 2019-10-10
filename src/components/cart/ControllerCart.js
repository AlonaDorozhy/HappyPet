
import {ViewCart}  from './ViewCart.js';
import {ModelCart} from './ModelCart.js';
import {AnimalFactory} from './ModelCart.js';

export class controllerCart {
  constructor(storage) {
    this.storage = storage;
    this.model = new ModelCart(this);
    this.view = new ViewCart(this);
    this.animal = new AnimalFactory(this);
    this.buildCart();

  }


  buildCart() {
    this.model.getAnimals().then((dd) => {
      this.storage.arrAllProds = dd;
      this.getItchBtn(dd);
      this.buildOrderCart(dd);
    })
  }

  getItchBtn(data) {
    this.model.getIchBtn(data);
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