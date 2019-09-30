export  class modelProduct {

  constructor(contr) {
    this.controller = contr;
  }

  getAllProducts() {
    return fetch('./../../data/products2.json').then((d) => d.json());
  }


}



