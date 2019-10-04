// $(function () {
//         $(`#cartOrder`).click(function () {
//           console.log("click");
//           $(`.cartInf`).modal('show');
//         });
//         $(`.cartInf`).modal({
//           closable: true
//         });
//       });

$(document).ready(function () {
  $('.demo.menu .item').tab({ history: false });
});
$('.tabular.menu .item').tab();

$('.dynamic.example .menu .item')
  .tab({
    cache: false,
    // faking API request
    apiSettings: {
      loadingDuration: 300,
      mockResponse: function (settings) {
        var response = {
          first: 'AJAX Tab One',
          second: 'AJAX Tab Two',
          third: 'AJAX Tab Three'
        };
        return response[settings.urlData.tab];
      }
    },
    context: 'parent',
    auto: true,
    path: '/'
  })
  ;

$('#context1 .menu .item')
  .tab({
    context: $('#context1')
  })
  ;
$('#context2 .menu .item')
  .tab({
    // special keyword works same as above
    context: 'parent'
  })
  ;
$('.menu .item')
  .tab()
  ;
$(document).ready(function () {
  // hide and open menu on small screen
  $(".ui.toggle.button").click(function () {
    $(".mobile.only.grid .ui.vertical.menu").toggle(100);
  });

  // toggle right sidebar
  $(".ui.sidebar")
    .sidebar({
      context: $(".pushable"),
      animation: "slide along",
      dimPage: false
    })
    .sidebar("attach events", ".ui.top.attached.blue.button");
});

$('.ui .item').on('click', function () {
  $('.ui .item').removeClass('active');
  $(this).addClass('active');
}); 
$('.ui.dropdown')
  .dropdown()
  ;
$(document).ready(function () {
  // hide and open menu on small screen
  $(".ui.toggle.button").click(function () {
    $(".mobile.only.grid .ui.vertical.menu").toggle(100);
  });

  // toggle right sidebar
  $(".ui.sidebar")
    .sidebar({
      context: $(".pushable"),
      animation: "slide along",
      dimPage: false
    })
    .sidebar("attach events", ".ui.top.attached.blue.button");
});



// <h4 class="ui dividing header"> List of orders</h4>
//   <div class="ui card" style="max-width: 100%; min-width: 100%;">
//     <div class="content" style="padding: 0;">
//       <div class="ui items">
//         <div class="item">
//           <div class="ui medium image">
//             <img src="https://semantic-ui.com/images/wireframe/image.png">
//                 </div>
//             <div class="content" style="padding: 1rem;">
//               <a class="header">12 Years a Slave</a>
//               <div class="meta">
//                 <span class="cinema">Union Square 14</span>
//               </div>
//               <div class="description">
//                 <p></p>
//               </div>
//               <div class="extra">
//                 <div class="ui label">IMAX</div>
//                 <div class="ui label"><i class="globe icon"></i> Additional Languages</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div class="extra content">
//         <a>
//           More Info
//         </a>
//       </div>
//     </div>