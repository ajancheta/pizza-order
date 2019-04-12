// Business Interface Logic ---------->

// Creating an object to store collected pizza info
function userOrder(pizza, items) {
  this.pizza = [],
  this.items = 0
};

function Pizza (userName, size, topping) {
  this.id,
  this.userName = userName,
  this.size = size,
  this.topping = [topping]
};

// Creating a prototype to add up collected data from the user and add total cost
userOrder.prototype.addToPizza = function(size, topping) {
  this.items += 1;
  var userPizza = new Pizza (size, topping);
  userPizza.id = this.items;
  this.pizza.push(userPizza);
}

userOrder.prototype.findPizza = function(id) {
  for (var i=0; i< this.pizza.length; i++) {
    if (this.pizza[i].id === id) {
      return this.pizza[i];
    };
  };
};

userOrder.prototype.addPrice = function() {
  var price = 0;
  // var order = userOrder.findPizza(pizzaId);
  this.pizza.forEach(function(pizza){
    if (order.size === "Small (12\")") {
      price += 18;
    } else if (order.size === "Large(18\")") {
      price += 20;

    }

    for (i=0; i < pizzas.topping[0].length; i++) {
      if (price >= 20) {
        price += 2;
      } if (price >= 18) {
        price += 1;
      }
    }
  });
  return price;
};

function showDetails (userOrder, pizzaId){
  var order = userOrder.findPizza(pizzaId);
  $(".size").html(order.size);
  $(".topping").html(order.topping[0].join(", "));
}

// User Interface Logic ---------->
$(document).ready(function(){
  $("button#nameButton").click(function(event) {
    event.preventDefault();
    var nameInput = $("input#userName").val();
    $(".name").text(nameInput);

    });

// Submitting the order form
  $("#orderForm").submit(function(event){
    event.preventDefault();
    var nameInput = $("input#nameInput").val();
    var userSize = $("#pizzaSize").val();
    var userTopping = $("#pizzaTopping").val();
    var toppingInput = [];
    $("input:checkbox[name=topping]:checked").each(function(){
      topppingInput.push($(this).val());

    });

    var finalOrder = new userOrder(userSize, userTopping);
    $(".total").text("$" + finalOrder);
    $(".name").text(nameInput);
    $(".size").text(userSize);
    $(".topping").text(userTopping);
    // finalOrder.addPrice();
    // $(".total").text(finalOrder.addPrice);
  });
});
