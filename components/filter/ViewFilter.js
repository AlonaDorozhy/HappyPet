export class viewFilter {

  constructor(controller) {
    this.controller = controller;
    this.storage = this.controller.storage;
    this.accordionWrapperNode = document.getElementsByClassName('accordion-wrapper')[0];
    this.accordionHeadline = this.accordionWrapperNode.getElementsByClassName('item itemFilter');
    console.log(this.accordionHeadline);
    this.i = 0
    this.checkActive()
  }

  checkActive(i) {
    for (this.i; this.i < this.accordionHeadline.length; this.i++) {
    this.createFilter(this.accordionHeadline[this.i])
      this.accordionHeadline[this.i].addEventListener("click", this.show)
    }
  }

  show() {
    console.log("click");
    console.log(this);
    this.accordionContent = this.nextElementSibling
    if (this.accordionContent.classList.contains('hide')) {
      this.accordionContent.className = "";
    } else {
      this.accordionContent.className = "hide";
    }

  }

  createFilter(item){
    switch (true) {
      case item.innerText === 'Cats':
       this.catFilter()
        break;
      case item.innerText === 'Dogs':
        this.dogFilter()
        break;
      case item.innerText === 'Birds':
        this.birdFilter()
        break;
      case item.innerText === 'Fishes':
        this.fishFilter()
        break;
      default:
        this.petsFilter()
    }
  }

  catFilter(){
    
  }
  dogFilter(){
    
  }
  birdFilter(){
    
  }
  fishFilter(){
    
  }
  petsFilter(){
    
  }
}