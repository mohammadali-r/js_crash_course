// document.addEventListener("DOMContentLoaded", function () {
//   var hello = "Hello World !";
//   document.body.innerHTML = hello;
// });

document.addEventListener("DOMContentLoaded", function () {
  var elem = document.getElementById("p1");
  var first_name = prompt("Enter your name:", "My friend");
  elem.innerHTML = first_name;
});
