import { modelCategory } from './ModelCategory.js';
import { viewCategory } from './ViewCategory.js';


export class controllerCategory {
  constructor(storage) {
    this.storage = storage;
    this.model = new modelCategory(this);
    this.view = new viewCategory(this);
    this.beginCategorySorting();
    console.log(this.view.checkCategory());
  }


  // buildProductList(prodArr) {
  //   this.view.buildProductList(prodArr);
  // }


  beginCategorySorting() {
    console.log(this.view.checkCategory());
    console.log(this.view.getSearchValue);
    this.active =  this.view.checkCategory()
      this.model.beginCategorySorting(this.active);
  
 
  }

  // buildProductList(prodArr) {
  //   this.storage.product.buildProductList(prodArr);
  // }



}

