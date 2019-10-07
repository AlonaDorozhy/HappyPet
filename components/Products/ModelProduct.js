export  class modelProduct {

  constructor(contr) {
    this.controller = contr;
  }

  getAllProducts() {
    this.arr = JSON.parse(window.localStorage.getItem('data'));
    let prodArr = this.arr.slice();
    return prodArr
  }


}



