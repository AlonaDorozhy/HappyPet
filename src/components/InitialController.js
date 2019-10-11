import InitialModel from './InitialModel.js';
import InitialView from './InitialView.js';

 export default class InitialController {
  constructor(observer) {
    this.observer = observer;
    this.model = new InitialModel();
    this.view = new InitialView();
    this.model.getJSONData(this.createInitialPage.bind(this));
 
  }

  createInitialPage(data) {
    this.view.render(data);
  }
}
