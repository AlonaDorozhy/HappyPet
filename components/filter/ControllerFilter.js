import { modelFilter } from './modelFilter.js';
import { viewFilter } from './viewFilter.js';


export class controllerFilter {
  constructor(storage) {

    this.storage = storage;
    this.model = new modelFilter(this);
    this.view = new viewFilter(this);
  }
  // initFilterStatus() {
  //   this.model.initFilterStatus();
  // }
  // getSearchValue() {
  //   return this.view.getSearchValue();
  // }
  beginFilterSorting() {
    this.model.beginFilterSorting();
   
  }
 
  createFilters() {
    this.view.createFilters();

  }

}

