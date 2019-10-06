export class viewCategory {

  constructor(controller) {
    this.controller = controller;
    this.storage = this.controller.storage;
    this.searchCategory = document.querySelector('.MainMenu'); 
    this.active
    this.searchCategory.addEventListener('click', () => this.checkCategory());
   this.getSearchValue()
  }


  checkCategory() {
    this.activeItem = document.querySelector('h3.item.active')
    this.active = this.activeItem.innerText
    return this.active
  }

    getSearchValue() {
      this.active
      
    }


}
