import { modelFilter } from './modelFilter.js';
import { viewFilter } from './viewFilter.js';


export class controllerFilter {
  constructor(storage) {

    this.storage = storage;
    this.model = new modelFilter(this);
    this.view = new viewFilter(this);
  }

  beginFilterSorting() {
    this.model.beginFilterSorting();
   
  }
 
  createFilters() {
    this.view.createFilters();

  }

}

