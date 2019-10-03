export class modelCategory {
  constructor(controller) {
    this.controller = controller;
    this.storage = this.controller.storage;

    this.onlyChosen=[]
  }

  beginCategorySorting() {
    const category = this.controller.getSearchValue();
    console.log(category);
    let prodArr = this.storage.arrAllProds.slice();
    this.controller.buildProductList(prodArr);
    if (category === "Cats") {
      this.ShowOnlyCats(prodArr);
    }
    if (category === "Dogs") {
      this.ShowOnlyDogs(prodArr);
    }
    if (category === "Birds") {
      this.ShowOnlyBirds(prodArr);
    }
    if (category === "Fishes") {
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
