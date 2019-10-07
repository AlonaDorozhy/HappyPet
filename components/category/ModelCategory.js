export class modelCategory {
  constructor(controller) {
    this.controller = controller;
    this.storage = this.controller.storage;
    this.onlyChosen = []
    this.beginCategorySorting()
    this.arr = JSON.parse(window.localStorage.getItem('data')); 
    let prodArr = this.arr.slice();
    // this.controller.storage.getIchBtn(prodArr) 
    // console.log(this.controller.storage.cart);
  }

 
  beginCategorySorting(active) {
    this.arr = JSON.parse(window.localStorage.getItem('data'));
    
    let prodArr = this.arr.slice();
    // this.controller.getItchBtn(prodArr);
    // console.log(prodArr);
    // console.log(this.controller.getItchBtn);
    // this.storage.cart.getItchBtn(prodArr) 
    this.onlyChosen = []
    switch (true) {
      case active === "Cats":
        prodArr.forEach(el => {
          if (el.type === 'cat') {
            this.onlyChosen.push(el)
          }});
        break;
      case active === "Dogs":
        prodArr.forEach(el => {
          if (el.type === 'dog') {
            this.onlyChosen.push(el)
          }});
        break;
      case active === "Birds":
     prodArr.forEach(el => {
          if (el.type === 'bird') {
            this.onlyChosen.push(el)
          }});
        break;  
      case active === "Fishes":
        prodArr.forEach(el => {
          if (el.type === 'fish') {
            this.onlyChosen.push(el)
          }});
        break;
      default:
        prodArr.forEach(el => {
            this.onlyChosen.push(el)
          })
    }
    this.controller.buildProductList(this.onlyChosen);
    // this.controller.getItchBtn(prodArr) 
  }
}
