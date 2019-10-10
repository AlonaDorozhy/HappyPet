export class viewCategory {

  constructor(controller) {
    this.controller = controller;
    this.searchCategory = document.querySelector('.MainMenu'); 
    this.active;
  }

  addListener(){
    this.searchCategory.addEventListener('click', () => this.checkCategory());
  }

  checkCategory() {
    this.activeItem = document.querySelector('h3.item.active');
    this.active = this.activeItem.innerText  ;
    this.controller.model.beginCategorySorting(this.active);
    return this.active;
  }



}
