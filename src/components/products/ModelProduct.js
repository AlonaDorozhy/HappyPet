export  class modelProduct {

  constructor(contr) {
    this.controller = contr;
  }

  getAllProducts() {
    this.arr = JSON.parse(window.localStorage.getItem('data'));
    let prodArr = this.arr;
    // console.log(prodArr);
    return prodArr
  }


  setAllProducts() {
    return fetch('../../data/products.json')
      .then((d) => {
        return d.json()

      })
      .then((json) => {
        localStorage.setItem("data", JSON.stringify(json));
        this.data = json;
        return this.data;
      });

  }
 
}