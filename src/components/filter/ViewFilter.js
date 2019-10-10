export class viewFilter {

  constructor(controller) {
    this.controller = controller;
    this.storage = this.controller.storage;
    this.accordionWrapperNode = document.getElementsByClassName('accordion-wrapper')[0];
    this.accordionHeadline = this.accordionWrapperNode.getElementsByClassName('item itemFilter');
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
   
    this.accordionContent = this.nextElementSibling
    if (this.accordionContent.classList.contains('hide')) {
      this.accordionContent.className = "";
    } else {
      this.accordionContent.className = "hide";
    }

  }

  createFilter(i) {
    switch (true) {
      case i.innerText === 'Cats':
        this.catFilter(i)
        break;
      case i.innerText === 'Dogs':
        this.dogFilter(i)
        break;
      case i.innerText === 'Birds':
        this.birdFilter(i)
        break;
      case i.innerText === 'Fishes':
        this.fishFilter(i)
        break;
      default:
        this.petsFilter(i)
    }
  }

  catFilter(clicked) {
    this.hiddenFilter = clicked.nextElementSibling;
    this.hiddenFilter.innerText = "";
    this.hiddenFilter.innerHTML = `   
    <div class="column filterHead filterPrice">Price</div>
<div class="row">
  <input class="inputMin" placeholder="min">
  <input class="inputMax" placeholder="max">
</div>
<div class="column filterHead ">Available</div>
<div class="row">
  <input class="inputMin" placeholder="min">
  <input class="inputMax" placeholder="max">
</div>
<div class="column filterHead ">Gender</div>
<div>
  <input type="radio" class="checkInput">
  <label class="checkLabel">female</label>
  <input class="checkInput" type="radio">
  <label class="checkLabel">male</label>
</div>
<div>
  <input class="checkInput" type="radio">
  <span class="column filterHead ">Short Legs</span>
</div>
<div>
  <input class="checkInput" type="radio">
  <span class="column filterHead ">Lopiness</span>
</div>
</div>
<div class="color"> </div>
` }

  dogFilter(clicked) {
    this.hiddenFilter = clicked.nextElementSibling;
    this.hiddenFilter.innerText = "";
    this.hiddenFilter.innerHTML = `   

   <div class="column filterHead filterPrice">Price</div>
  <div class="row">
    <input class="inputMin" placeholder="min">
    <input class="inputMax" placeholder="max">
</div>
  <div class="column filterHead ">Available</div>
  <div class="row">
    <input class="inputMin" placeholder="min">
    <input class="inputMax" placeholder="max">
</div>
  <div class="column filterHead ">Gender</div>
 <div>
  <input  type="radio"  class ="checkInput"  >
  <label class ="checkLabel" >female</label>
  <input class ="checkInput"  type="radio"  >
  <label class ="checkLabel" >male</label>
</div>
<div>
   <input class ="checkInput"  type="radio"  >
   <span class="column filterHead ">Short Legs
 </span>
 </div>
<div>
   <input class ="checkInput"  type="radio"  >
   <span class="column filterHead ">Pedigree
 </span>
 </div>
<div>
   <input class ="checkInput"  type="radio"  >
    <span class="column filterHead ">
Specialization  </span>
</div>
  <div class="color"> </div>
`}

  birdFilter(clicked) {
    this.hiddenFilter = clicked.nextElementSibling;
    this.hiddenFilter.innerText = "";
    this.hiddenFilter.innerHTML = ` 

  <div class="column filterHead filterPrice">Price</div>
  <div class="row">
    <input class="inputMin" placeholder="min">
    <input class="inputMax" placeholder="max">
</div>
  <div class="column filterHead ">Available</div>
  <div class="row">
    <input class="inputMin" placeholder="min">
    <input class="inputMax" placeholder="max">
</div>
  <div class="column filterHead ">Gender</div>
 <div>
  <input  type="radio"  class ="checkInput"  >
  <label class ="checkLabel" >female</label>
  <input class ="checkInput"  type="radio"  >
  <label class ="checkLabel" >male</label>
</div>
<div>
   <input class ="checkInput"  type="radio"  >
   <span class="column filterHead ">Flying
 </span>
 </div>
<div>
   <input class ="checkInput"  type="radio"  >
   <span class="column filterHead ">Singing
 </span>
 </div>
<div>
   <input class ="checkInput"  type="radio"  >
    <span class="column filterHead ">
Talking  </span>
</div>
  <div class="color"> </div>
` }

  fishFilter(clicked) {
    this.hiddenFilter = clicked.nextElementSibling;
    this.hiddenFilter.innerText = "";
    this.hiddenFilter.innerHTML = `  
     <div class="column filterHead filterPrice">Price</div>
  <div class="row">
    <input class="inputMin" placeholder="min">
    <input class="inputMax" placeholder="max">
</div>
  <div class="column filterHead ">Available</div>
  <div class="row">
    <input class="inputMin" placeholder="min">
    <input class="inputMax" placeholder="max">
</div>
  <div class="column filterHead ">Gender</div>
 <div>
  <input  type="radio"  class ="checkInput"  >
  <label class ="checkLabel" >female</label>
  <input class ="checkInput"  type="radio"  >
  <label class ="checkLabel" >male</label>
</div>
<div>
   <input class ="checkInput"  type="radio"  >
   <span class="column filterHead ">Freshwater </span>
 </div>
<div>
   <input class ="checkInput"  type="radio"  >
    <span class="column filterHead ">Zonality  </span>
</div>
  <div class="color"> </div>

`}

  petsFilter(clicked) {
    this.hiddenFilter = clicked.nextElementSibling;
    this.hiddenFilter.innerHTML = ` 
  <div class="column filterHead filterPrice">Price</div>
  <div class="row">
    <input class="inputMin" placeholder="min">
    <input class="inputMax" placeholder="max">
</div>
  <div class="column filterHead ">Available</div>
  <div class="row">
    <input class="inputMin" placeholder="min">
    <input class="inputMax" placeholder="max">
</div>
  <div class="column filterHead ">Gender</div>

 <div>
  <input  type="radio"  class ="checkInput"  >
  <label class ="checkLabel" >female</label>
  <input class ="checkInput"  type="radio"  >
  <label class ="checkLabel" >male</label>
</div>


`
  }
}