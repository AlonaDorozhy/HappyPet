import { modelCategory } from './ModelCategory.js';
import { viewCategory } from './ViewCategory.js';


export class controllerCategory {
  constructor(storage) {
    this.storage = storage;
    this.model = new modelCategory(this);
    this.view = new viewCategory(this);
    this.addListener();
  }

  addListener(){
    this.view.addListener(this.checkCategory);
  }

  checkCategory() {
    this.model.beginCategorySorting(this.active);
    this.view.checkCategory()
  }
  getItchBtn(data){
    this.storage.cart.getItchBtn(data) 
  }
 
  buildProductList(prodArr) {
    this.storage.product.buildProductList(prodArr);
  }

}

