export default class modelCart {
  constructor(controller) { 
    this.controller = controller;
    this.data = [];
    this.history = localStorage.getItem("history") ? JSON.parse(localStorage.getItem("history")) : [];
    this.animalFactory = new AnimalFactory();

   this.btn = []
   this.btnItch 
  
    
  }

  beginFilterProcess() {
    let prodArr = this.storage.arrAllProds.slice();
    if (this.storage.searchByNameStatus === true) {
      prodArr = this.startFilterByName(prodArr);
    }

    this.controller.buildProductList(prodArr);
  }

  getIchBtn(data) {
    data.forEach(pets => {
      this.btnItch = document.getElementById(pets.id);
      console.log(this.btnItch);
      // this.btnItch.addEventListener('click', () => this.btnProduct(data, pets.id)) 
      // this.btnItch.addEventListener('click', () => this.buildProductCart(data, pets.id)) 

    });

}
  // buildProductCart(prodArr) {
  //   this.view.buildProductCart(prodArr);
  // }
  btnProduct(data, current){
console.log('Text');
console.log(current);

console.log(data);
}

getAnimals() {

  return fetch('../../../data/products2.json')
    .then((d) => {
      return d.json()

    })
    .then((json) => {
      this.data = this.animalFactory.createData(json);
      localStorage.setItem("data", JSON.stringify(this.data));
      this.data = json;
      // console.log(this.data);
    this.getIchBtn(this.data) 
      return this.data;
    });

}
}

export class AnimalFactory {
  createData(array) {

    let data = array.map(el => {
      // console.log(el.type)
      if (el.type === "cat") {
        localStorage.setItem("cat", JSON.stringify(el));
      }
      if (el.type === "dog") {
        localStorage.setItem("dog", JSON.stringify(el));
      }
      if (el.type === "bird") {
        localStorage.setItem("bird", JSON.stringify(el));
      }
      if (el.type === "fish") {
        localStorage.setItem("fish", JSON.stringify(el));
      }

      return el = this.createObj(el.type, el)
    });
    return data;
  }

  createObj(type, obj) {
    if (type === 'bird') {
      return new Bird(obj)
    } else if (type === 'fish') {
      return new Fish(obj)
    } else if (type === 'dog') {
      return new Dog(obj)
    } else if (type === 'cat') {
      return new Cat(obj)
    }
  }


}

class Animal {
  constructor(obj) {
    this.type = obj.type;
    this.breed = obj.breed;
    this.id = obj.id;
    this.price = obj.price;
    this.count = obj.count;
    this.age = obj.age;
    this.color = obj.color;
    this.isPredator = obj.isPredator;
    this.gender = obj.gender;
    this.weigth = obj.weigth;
    this.img = obj.img
  }
}

class Bird extends Animal {
  constructor(obj) {
    super(obj);
    this.isFly = obj.isFly;
    this.isSpeak = obj.isSpeak;
    this.isSing = obj.isSing;
  }
}

class Fish extends Animal {
  constructor(obj) {
    super(obj);
    this.isFreshWater = obj.isFreshWater;
    this.deepLevel = obj.deepLevel;
  }
}



class Dog extends Animal {
  constructor(obj) {
    super(obj);
    this.specialization = obj.specialization;
    this.fur = obj.fur;
    this.pedigree = obj.pedigree;
    this.cupping = obj.cupping;
    this.short_sightedness = obj.short_sightedness;
  }
}

class Cat extends Animal {
  constructor(obj) {
    super(obj);
    this.isFold = obj.isFold;
    this.fur = obj.fur;
    this.pedigree = obj.pedigree;
    this.cupping = obj.cupping;
    this.short_sightedness = obj.short_sightedness;
  }
}


