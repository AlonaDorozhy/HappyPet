export default class InitialModel {
  getJSONData(createInitialPage) {
    fetch('../../data/products.json')
      .then(res => res.json())
      .then(data => {
        localStorage.setItem("data", JSON.stringify(data));
        createInitialPage(data);
      })
  }

  
}