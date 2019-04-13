// Business Interface Logic ---------->

// Creating an object to store collected pizza data
function userOrder (userName, size, topping) {
  this.userName = userName,
  this.size = size,
  this.topping = topping
}

// Creating a prototype to add up collected data from the user and add total cost of user prefered size and topping
userOrder.prototype.addPrice = function() {
  this.total = this.size + this.topping;
  return this.total;
};

// Broken function
// userOrder.prototype.addPrice = function() {
//   var price = 0;
//   var topping = [];
//     for (i=0; i < pizzas.topping[0].length; i++) {
//       if (price >= 20) {
//         price += 2;
//       } if (price >= 18) {
//         price += 1;
//       }
//     }
//
//   return price;
//
// };


// User Interface Logic ---------->
$(document).ready(function(){
  $("button#nameButton").click(function(event) {
    event.preventDefault();
    var nameInput = $("input#userName").val();
    $(".name").text(nameInput);

    });

  $("#orderForm").submit(function(event){
    event.preventDefault();
    var nameInput = $("input#nameInput").val();
    var sizeInput = parseInt($("#size").val());
    var toppingInput = parseInt($("#topping").val());
    var finalOrder = new userOrder (nameInput, sizeInput, toppingInput);
    var finalTotal = finalOrder.addPrice();
    $(".name").text(nameInput);
    $(".total").text("$" + finalTotal + ".00");
  });
});
