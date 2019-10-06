export class modelCategory {
  constructor(controller) {
    this.controller = controller;
    this.storage = this.controller.storage;

    this.onlyChosen=[]
  }

  beginCategorySorting(active) {
    
    console.log(active);
    let prodArr = this.storage.arrAllProds.slice();
    this.controller.buildProductList(prodArr);
    if (active === "Cats") {
      this.ShowOnlyCats(prodArr);
    }
    if (active === "Dogs") {
      this.ShowOnlyDogs(prodArr);
    }
    if (active === "Birds") {
      this.ShowOnlyBirds(prodArr);
    }
    if (active === "Fishes") {
      this.ShowOnlyFishes(prodArr);
    }
  }


  ShowOnlyCats(prodArr) {
    this.onlyChosen =[]
    this.cats = prodArr.forEach(el => {
      if (el.type === 'cat'){
        this.onlyChosen.push(el)
      }
    });
    this.controller.buildProductList(this.onlyChosen);
  }
  ShowOnlyDogs(prodArr) {
    this.onlyChosen = []
    this.cats = prodArr.forEach(el => {
      if (el.type === 'dog'){
        this.onlyChosen.push(el)
      }
    });
    this.controller.buildProductList(this.onlyChosen);
  }
  ShowOnlyBirds(prodArr) {
    this.onlyChosen = []
    this.cats = prodArr.forEach(el => {
      if (el.type === 'bird'){
        this.onlyChosen.push(el)
      }
    });
    this.controller.buildProductList(this.onlyChosen);
  }
  ShowOnlyFishes(prodArr) {
    this.onlyChosen = []
    this.cats = prodArr.forEach(el => {
      if (el.type === 'fish'){
        this.onlyChosen.push(el)
      }
    });
    this.controller.buildProductList(this.onlyChosen);
  }
 
}
