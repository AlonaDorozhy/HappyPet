export class modelFilter {
  constructor(controller) {
    this.controller = controller;
    this.storage = this.controller.storage;
    this.onlyChosen = []
  }
  

  beginFilterSorting() {
    console.log("fuuuu");
    const name = this.controller.createFilter();
    console.log(name);

  }


}
