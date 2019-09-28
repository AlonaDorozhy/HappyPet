export class modelCart{
  constructor(control) {
    this.control = control;
    this.dataBase = [];
    this.filteredBase = [];
    this.subFilteredBase = [];
    this.filterParams = [];
    this.dictionary = {};
    this.count = 0;
    this.cartOrderAmount = (JSON.parse(localStorage.getItem("cartOrderAmount"))) ?
      JSON.parse(localStorage.getItem("cartOrderAmount")) : [];
  }


}