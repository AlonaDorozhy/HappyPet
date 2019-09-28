import View from '../View/View.js';
import Model from '../Model/Model.js';

export default class Controller {
  constructor() {
    this.lang = "En";
    this.view = new View(this);
    this.model = new Model(this);
  }
}