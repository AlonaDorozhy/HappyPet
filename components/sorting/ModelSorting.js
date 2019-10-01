export class modelSorting {
  constructor(controller) {
    this.controller = controller;
    this.storage = this.controller.storage;
    this.sortOn()
  }

  beginSortingProcess() {
    const name = this.controller.getSearchValue();
    let prodArr = this.storage.arrAllProds.slice();
    this.controller.buildProductList(prodArr);
    if (name === "Price") {
      this.startSortingByPrice(prodArr);
    }
     if (name === "Quantity") {
      this.startSortingByQuantity(prodArr);
    }
     if (name === "Alphabet") {
      this.startSortingByAlphabet(prodArr);
    }

  }

  sortOn(prop) {
    return function (a, b) {
      if (a[prop] < b[prop]) {
        return -1;
      } else if (a[prop] > b[prop]) {
        return 1;
      } else {
        return 0;
      }
    }
  }

  startSortingByPrice(prodArr) {

    this.price = prodArr.price;
    prodArr.sort(this.sortOn("price"));

    console.log(prodArr);
    this.controller.buildProductList(prodArr);

  }
  startSortingByQuantity(prodArr) {

    this.price = prodArr.price;
    prodArr.sort(this.sortOn("quantity"));

    console.log(prodArr);
    this.controller.buildProductList(prodArr);

  }
  startSortingByAlphabet(prodArr) {

    this.price = prodArr.price;
    prodArr.sort(this.sortOn("name"));

    console.log(prodArr);
    this.controller.buildProductList(prodArr);

  }



}
