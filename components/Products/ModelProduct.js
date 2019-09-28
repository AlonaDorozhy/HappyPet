export  class modelProduct {
  constructor(contr) {
    this.controller = contr;
  }

  getAllProducts() {
    return fetch('./../../data/products.json').then((d) => d.json());
  }


}

