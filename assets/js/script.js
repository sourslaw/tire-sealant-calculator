// function calc() {
//   var amount = document.getElementById("rimDiameter").value;
//   var amount = parseInt(amount, 10);
//   var quantity = document.getElementById("rimWidth").value;
//   var quantity = parseInt(quantity, 10);
//   var total = amount * quantity;
//   document.getElementById("total").value = total;
// }
console.log("js here")
document.getElementById('calculate').addEventListener('click', function() {
	console.log('click')
  var amount = document.getElementById("amount").value;
  var amount = +amount;
  var quantity = document.getElementById("quantity").value;
  var quantity = +quantity;
  var total = amount * quantity;
  document.getElementById("total").value = total;
});