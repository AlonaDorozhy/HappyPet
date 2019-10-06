export class viewSorting {

  constructor(controller) {
    this.controller = controller;
    this.storage = this.controller.storage;
    this.searchSorting = document.querySelector('#menu');
    this.searchSorting.addEventListener('click', () => this.checkSorting());
  }

  checkSorting() {
    this.current = document.querySelector('div.item.active.selected')
    this.active = this.current.querySelector('span.innerText').innerText
    this.controller.beginSortingProcess();
  }

  getSearchValue() {
    return this.active
  }


}
