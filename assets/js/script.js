console.log("js here")

document.getElementById('calculate').addEventListener('click', function() {
	console.log('click')
  var amount = document.getElementById("amount").value;
  var amount = +amount;
  var quantity = document.getElementById("quantity").value;
  var quantity = +quantity;
  var total = 4*3.14*3.14*((amount/1000/2)+(quantity/1000/2))*quantity/1000/2*300;
	
  document.getElementById("total").value = Math.round(total);
});

// =4*3.14*3.14*((B2/1000/2)+(B3/1000/2))*B3/1000/2*300
