export default class viewCart {
   constructor(contr) {
      this.controller = contr;
      this.storage = this.controller.storage;
      this.OrderCartDOM = document.querySelector('.ui.modal.cartInf');
      this.CartClick = document.getElementById('cartOrder');
      this.AddProduct = document.querySelector('.btnAdd')
      this.OrderCartDOM.innerHTML = ""
      this.CartClick.addEventListener('click', () => this.buildOrderCart());
      this.storage = this.controller.storage;
      this.cartArr = []

      this.allCartProd = []

   }




   btnProduct(data, current) {
      this.controller.buildProductCart(data, current);
      this.controller.buildOrderCart(data, current)
   }

   buildProductCart(data, current) {
      data.forEach(el => {
         if (el.id === current) {
            console.log(el);
            this.cartArr.push(el);
         }
      });
 
      this.cartArr.forEach(el => {
         this.ProdCartDOM = document.querySelector('div.segmentFirst');
      
         this.first = `
   
  <div class="ui card" style="max-width: 100%; min-width: 100%;">
    <div class="content" style="padding: 0;">
        <div class="ui items">
            <div class="item">
                <div class="ui small image CartImg ">
                    <img src="${el.url}">
                </div>
             <div class="ui grid CartInfo"> 
            <div class="meta">
                    <div class="infoDetails">
                          <h3> ${el.name} </h3>
                          
            </div> <hr>
        </div>
                   
    <div class="row cartMainInfo">
        <div class="three wide column">Ordered</div>
        <div class="five wide column">
        <div class="center aligned cart-quant">
            <i class="plus icon large disabled" data-id="0"></i>
            <span> 10 </span>
            <i class="minus icon large" data-id="0"></i>
        </div>
        </div>
        <div class="five wide column"><p class="prodPrice"><i class="money bill alternate outline icon"></i>: ${el.price}</p></div>
  </div>
 
  </div>
       
    </div>  <p>Gender of pet: ${el.gender}.</p>   
    </div>
    </div></div>`

      });
      this.allCartProd.push(this.first)


   }

   buildOrderCart(prodArr) {
     
      $(document).ready(function () {
         $('.demo.menu .item').tab({ history: false });
      });
    

      this.OrderCartDOM.innerHTML = ''
      this.OrderCartDOM.innerHTML += `
      
<form class="ui form">
<div class="ui pointing secondary demo menu">

    <a class="active red item" data-tab="first">Shopping cart</a>
    <a class="blue item" data-tab="second">Order form</a>
    <a class="green item" data-tab="third">History of orders</a>
</div>

 <div class="ui active tab segment " data-tab="first">
 <div class="segmentFirst">
    <h4 class="ui dividing header"> List of orders</h4>
${this.allCartProd}
 </div>


</div>
<div class="ui tab segment" data-tab="second">
<div class="row">
   <h4 class="ui dividing header">Person Info</h4>

   <div class="field">
      <label>Name</label>
      <div class="two fields">
         <div class="field">
            <input type="text"  placeholder="First Name">
         </div>
         <div class="field">
            <input type="text" placeholder="Last Name">
         </div>
      </div>
   </div>
   
   <div class="field">
      <label>Adress</label>
      <div class="fields">
         <div class="six wide field">
          
         <select  class="ui fluid dropdown">
         
            <option value="NV">City</option>
            <option value="NV">Dnipro</option>
            <option value="NH">Lviv</option>
            <option value="NJ">Odessa</option>
            <option value="NM">Kiyv</option>
            <option value="NY">Harkiv</option>
            <option value="NC">Zmerenka</option>
         </select>
         </div>
         <div class="six wide field">
            <input type="text" placeholder="Street ">
         </div>
         <div class="four wide field">
            <input type="text"  placeholder="Apt #">
         </div>
      </div>
   </div>

   <h4 class="ui dividing header">Billing Information</h4>
 
   <div class="fields">
      <div class="seven wide field">
         <label>Номер карты</label>
         <input type="text" maxlength="16" placeholder="Card #">
      </div>
      <div class="six wide field">
        <label>Card Type</label>
         <select  class="ui fluid dropdown">
            <option class="item" data-value="visa">
                <i class="visa icon"></i> Visa </option>
            <option class="item" data-value="amex">
                <i class="amex icon"></i> American Express </option>
            <option class="item" data-value="discover">
                <i class="discover icon"></i>Discover</option>
         </select>
      </div>

   </div>
   <div class="fields">
      <div class="three wide field">
         <label>CVC</label>
         <input type="text" maxlength="3" placeholder="CVC">
      </div>
      <div class="six wide field">
         <label>End day</label>
         <div class="two fields">
            <div class="field">
               <select class="ui fluid search dropdown" name="card[expire-month]">
                  <option value="">Месяц</option>
                  <option value="1">Январь</option>
                  <option value="2">Февраль</option>
                  <option value="3">Март</option>
                  <option value="4">Апрель</option>
                  <option value="5">Май</option>
                  <option value="6">Июнь</option>
                  <option value="7">Июль</option>
                  <option value="8">Август</option>
                  <option value="9">Сентябрь</option>
                  <option value="10">Октябрь</option>
                  <option value="11">November</option>
                  <option value="12">December</option>
               </select>
            </div>
        </div>
            <div class="field">
               <input type="text"  maxlength="4" placeholder="Year">
            </div>
         </div>
      </div>
   </div>
   
   <h4 class="ui dividing header">Invoice</h4>
   <div class="fields">
    <div class="field six wide">
      <label>Send invoice :</label>
      <input type="text" name="phone" placeholder=" Phone Number">
   </div
      <div class="ui btnAdd button successBtn">
          <i class="cart arrow down icon"></i>Confirm the order
        </div>
    </div>
 </div>

  
<div class="ui  tab segment" data-tab="third">
<div class="row">
   <h4 class="ui dividing header">History</h4></div>
</div>
</form>

`
   }
}


