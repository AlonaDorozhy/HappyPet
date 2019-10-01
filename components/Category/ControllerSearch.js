import {modelCategory} from './ModelCategory.js.js'
import {viewCategory} from './ViewCategory.js.js'



export class controllerCategory {
  constructor(storage) {
    this.storage = storage;
    this.model = new modelCategory(this);
    this.view = new viewCategory(this);


  }



}