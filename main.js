// $(function () {
//   $("#test").click(function () {
//     $(".test").modal('show');
//   });
//   $(".test").modal({
//     closable: true
//   });
// });
// console.log("hi");
// $(function () {
//   $("#test1").click(function () {
//     $(".test1").modal('show');
//   });
//   $(".test1").modal({
//     closable: true
//   });
// });
// console.log("hi");
// $(function () {
//   $("#test2").click(function () {
//     $(".test2").modal('show');
//   });
//   $(".test2").modal({
//     closable: true
//   });
// });
// console.log("hi");
// $(function () {
//   $("#test3").click(function () {
//     $(".test3").modal('show');
//   });
//   $(".test2").modal({
//     closable: true
//   });
// });

$(function () {
  $(`#cartOrder`).click(function () {
    console.log("click");
    $(`.cartInf`).modal('show');
  });
  $(`.cartInf`).modal({
    closable: true
  });
});