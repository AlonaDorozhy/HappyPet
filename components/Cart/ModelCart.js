export default class modelCart {

  constructor(contr) {
    this.controller = contr;
  }

  getOrderCart() {
    return fetch('./../../data/products2.json').then((d) => d.json());
  }


}
