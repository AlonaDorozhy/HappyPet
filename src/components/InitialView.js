
import Templater from '../Templater.js';

export default class InitialView {
    constructor() {
        this.templater = new Templater('../src/components/InitialTemplate.html');
    }

    render(data) {
        const main = document.querySelector('#root');
        main.innerHTML = '';
        this.templater.load(data, main);
       
    }

  
}

