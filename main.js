$('.ui .item').on('click', function () {
  $('.ui .item').removeClass('active');
  $(this).addClass('active');
}); 

$('.ui.menu .item')
  .tab({
    history: true,
    historyType: 'hash'
  });

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


