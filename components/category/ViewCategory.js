export class viewCategory {

  constructor(controller) {
    this.controller = controller;
    this.storage = this.controller.storage;
    this.searchCategory = document.querySelector('.MainMenu');
    this.searchCategory.addEventListener('click', () => this.checkCategory());
  }


  checkCategory() {
    this.active = document.querySelector('h3.item.active').innerText
    this.controller.beginCategorySorting();
  }

  getSearchValue() {
    return this.active;
  }


}
