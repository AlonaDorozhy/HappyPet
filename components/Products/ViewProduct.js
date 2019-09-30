export class viewProduct {
  constructor(contr) {
    this.controller = contr;
    this.storage = this.controller.storage;
    this.productListDOM = document.querySelector('.productList');

  }

  buildProductList(prodArr) {
    this.productListDOM.innerHTML = "";

    prodArr.forEach(pets => {
      $(function () {
        $(`#item${pets.id}`).click(function () {
          $(`.item${pets.id}`).modal('show');
        });
        $(`.item${pets.id}`).modal({
          closable: true
        });
      });   


      this.productListDOM.innerHTML += `
          <div class="column">
              <div class="ui special card">
                <div class="image">
                  <img src="${pets.url}">
                </div>
                <div class="content">
                  <div class="header">${pets.name}</div>
                  <div class="description">
                    <p class="prodType">${pets.type}: ${pets.name}</p>
                    <p class="prodInfo">Colors: ${pets.color.join('/')}</p>
                    <p class="prodPrice">Price: ${pets.price}</p>
                  </div>
                </div>
                <div class="ui two bottom attached buttons">
                  <button class="ui button btnMore create_btn" type="button" id="item${pets.id}"><i
                      class="expand arrows alternate"></i>
                    <i class="expand arrows alternate icon">
                    </i>More</button>
                  <div class="ui modal item${pets.id}">
                    <i class="close icon"></i>
                    <div class="header  detProdTypeHead ">
                      ${pets.type}: ${pets.name}
                    </div>
                    <div class="image content">
                      <div class="ui medium image">
                        <img src="${pets.url}">
                        <div class="ui header detProdType prodPrice"> Price: ${pets.price}<br>
                          <i class="attention"> ${pets.quantity}</i> ${pets.type} available right now! </div>
                      </div>
                      <div class="description">
                        <div class="ui  detProdType prodHeader"> This ${pets.gender} ${pets.type} already
                          ${pets.ageMonth} mons old.
                        </div>
                        <p class="mainInfo "> </p>
                        <div class="infoDetails">
                          <h3> Details: </h3>
                          <hr>
                          <p>Colors: ${pets.color.join('/')}.</p>
                          <p>Weight of pet: ${pets.weightKg}.</p>
                          <p>Pet fur: ${pets.fur}.</p>
                          <p>Life length: ${pets.lifetimeYears} years.</p>
                          <p>This pet has short legs: ${pets.shortLegged}.</p>
                          <p>This pet is predatory: ${pets.rapacity}.</p>
                          <p>The pet has a pedigree: ${pets.pedigree}.</p>
                          <p>The pet needs trimming: ${pets.trimming}.</p>
                        </div>
                      </div>
                    </div>
                    <div class="actions">
                      <div class="ui black deny button">
                        Back
                      </div>
                      <div class="ui positive right labeled icon button">
                        Add to cart
                        <i class="checkmark icon"></i>
                      </div>
                    </div>
                  </div>
                  <div class="ui btnAdd button"><i class="cart arrow down icon"></i> Add to cart </div>
                </div>
            </div> `
    });

  }
}
