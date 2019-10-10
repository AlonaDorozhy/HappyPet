export default class Templater {
 
    constructor(pass) {
      this.elements = [];
      this.catch = false;
      this.loading = false;
      fetch(pass)
        .then(response => response.text())
        .then(result => {
          this.template = result;
          this.loading = true;
          this.catch ? this.render() : null;
        });
    }
  
    load(allProducts, domNode, selector, event, fun) {
      if (this.loading) {
    
        this.show(allProducts, domNode, selector, event, fun);
      } else {
        this.catch = true;
        this.elements.push({
          allProducts, domNode,selector, event, fun
        });
      }
    }
  
    render() {
      this.elements.forEach(({ allProducts, domNode, selector, event, fun }) => {
        this.show(allProducts, domNode, selector, event, fun);
      });
    }
  
    show(allProducts, domNode, selector, event, fun) {
      const node = domNode;
      let stringHTML = this.template;
      for (const key in allProducts) {
        const regexp = new RegExp(`{{ ${key} }}`);
        stringHTML = stringHTML.replace(regexp, allProducts[key]);
      }
      node.innerHTML += stringHTML;
      this.addHandlers(selector, event, fun);
    }
  
    addHandlers(selectors = [], event, fun) {
      if (selectors.length) {
        selectors.forEach(elem => {
          const node = document.querySelector(elem);
          node.addEventListener(event, fun);
        });
      }
    }
  }