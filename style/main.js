$('.ui .item').on('click', function () {
  $('.ui .item').removeClass('active');
  $(this).addClass('active');
}); 
$('.tabular.menu .item').tab();


$('.ui.button')
  .on('click', function () {

    $.tab('change tab', 'tab-name');
  })
  ;
$(function () {
  $(`#cartOrder`).click(function () {
    $(`.cartInf`).modal('show');
  });
  $(`.cartInf`).modal({
    closable: true
  });
});
$('.ui.dropdown')
  .dropdown();


