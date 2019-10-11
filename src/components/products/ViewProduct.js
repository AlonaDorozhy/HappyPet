import Templater from '../../Templater.js'
export class ViewProduct {
  constructor() {
    this.templater = new Templater('../src/components/products/ProductCard.html');
  }

  findDomPlace(products) {

    window.addEventListener('load', () => {
      this.products = document.querySelector('.productList');
      this.place = this.products;
      this.buildProductList(this.place, products);
      return this.place;
    })
  }

  buildProductList(place, products) {
    place.innerHTML = "";
    products.forEach(pet => {
      this.templater.load(pet, place);

    });

  }

}
