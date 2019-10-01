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