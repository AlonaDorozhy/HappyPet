import InitialModel from './InitialModel.js';
import InitialView from './InitialView.js';

 export default class InitialController {
  constructor(observer) {
    this.observer = observer;
    this.model = new InitialModel();
    this.view = new InitialView();
    this.model.loadGoodsFromJSON(this.showAllGoods.bind(this));
 
  }

  showAllGoods(data) {
    this.model.setActiveCase(data);
    this.view.render(data);
  }
}
