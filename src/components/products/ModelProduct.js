export  class ModelProduct {


  getAllProducts() {
    this.arr = JSON.parse(window.localStorage.getItem('data'));
    let prodArr = this.arr;
    return prodArr;
  }
   
  }
  
  
 
