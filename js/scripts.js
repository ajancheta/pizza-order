// Business Interface Logic

// Creating an object to store data of the user's name and personal choices on size and topping. This will be used to create a prototype to obtain total cost of pizza.
function pizzaOrder(userName, size, topping) {
  this.userName = userName,
  this.size = size,
  this.topping = topping
}

pizzaOrder.prototype.addTotal = function() {
  var totalCost = ("$") + this.size + this.topping;
  this.addTotal = totalCost;
}

// User Interface Logic
$(document).ready(function(){
  $("button#nameButton").click(function(event) {
    event.preventDefault();
    var nameInput = $("input#userName").val();
    $(".name").text(nameInput);

    });

  $("#orderForm").submit(function(event){
    event.preventDefault();
    var userSize = parseInt($("#pizzaSize").val());
    var userTopping = parseInt($(""))
  });
});
