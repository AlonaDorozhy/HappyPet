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

  $(".ui.sidebar")
    .sidebar({
      context: $(".pushable"),
      animation: "slide along",
      dimPage: false
    })
    .sidebar("attach events", ".ui.top.attached.blue.button");
});

// var accordionWrapperNode = document.getElementsByClassName('accordion-wrapper')[0];
// var accordionHeadline = accordionWrapperNode.getElementsByTagName('h3');

// function accordionToggle (e) {
// 	e.preventDefault();
// 	var accordionContent = this.nextSibling.nextSibling;
// 	if (accordionContent.classList.contains('hide')) {
// 		accordionContent.className = "";
// 	} else {
// 		accordionContent.className = "hide";
// 	}
// }

// for (var i = 0; i < accordionHeadline.length; i++) {
// 	accordionHeadline[i].addEventListener("click", accordionToggle);
// }

