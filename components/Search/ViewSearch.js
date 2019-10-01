class viewSearch {
  constructor(controller) {
    this.controller = controller;
    this.storage = this.controller.storage;

    this.searchInputDOM = document.querySelector('.searchInput');
    this.searchInputDOM.addEventListener('keyup', () => this.checkSearchInput());
  }


  checkSearchInput() {
    this.storage.searchByNameStatus = this.searchInputDOM.value !== "" ? true : false;
    this.controller.beginFilterProcess();
  }

  getSearchValue() {
    return this.searchInputDOM.value;
  }

  
}


export { viewSearch };
