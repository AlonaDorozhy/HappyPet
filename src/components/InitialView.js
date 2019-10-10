
import Templater from '../Templater.js';

export default class InitialView {
    constructor() {
        this.templater = new Templater('../src/components/InitialTemplate.html');
    }

    render(data) {
        const main = document.querySelector('#root');
        main.innerHTML = '';
        console.log(data);
        this.templater.load(data, main);
        // data.forEach(elem => {
        
        //     this.templater.load(elem, main);
        // });
    }

    // render(data) {
    //     const main = document.querySelector('#root');
    //     main.innerHTML = '';
    //     data.forEach(elem => {
    //         console.log(elem);
    //         console.log(main);
    //         this.templater.load(elem, main);
    //     });
    // }
}

