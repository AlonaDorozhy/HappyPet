export class modelSearch {
  constructor(contr) {
    this.controller = contr;
    this.storage = this.controller.storage;
  }

  beginFilterProcess() {
    let prodArr = this.storage.arrAllProds.slice();

    if (this.storage.searchByNameStatus === true) {
      prodArr = this.startFilterByName(prodArr);
    } 
    console.log(prodArr);
    this.controller.buildProductList(prodArr);
  }

  startFilterByName(prodArr) {
    const name = this.controller.getSearchValue();
    console.log(name);
    return prodArr.filter((prodObj) => {
    
      let type = prodObj.type
      let prod = prodObj.name
      console.log(type, prod);
      return (prodObj.name.toLowerCase().indexOf(name) !== -1|| prodObj.type.toLowerCase().indexOf(name) !== -1)
    })
  }
}