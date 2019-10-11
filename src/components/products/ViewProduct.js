import Templater from '../../Templater.js'
export class ViewProduct {
  constructor(contr) {
    this.controller = contr;
    this.storage = this.controller.storage;
    this.templater = new Templater('../src/components/products/ProductCard.html');

  }

  findDomPlace(products) {

    window.addEventListener('DOMContentLoaded', () => this.getProdList()
    )
    window.addEventListener('load', () => {
      this.products = document.querySelector('.productList');
      this.place = this.products;
      this.buildProductList(this.place, products);
      return this.place;
    })
    return this.place;
  }
  getProdList() {
    this.products = document.querySelector('.productList');

  }
  buildProductList(place, products) {
    place.innerHTML = "";
    products.forEach(pets => {
      this.templater.load(pets, place);
    });

  }

}
