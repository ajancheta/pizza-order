// Business Interface Logic ---------->

// Creating an object to store collected pizza

function userOrder(pizza, items) {
  this.pizza = [],
  this.items = 0
}

function Pizza (userName, size, topping) {
  this.id = 0,
  this.userName = userName,
  this.size = size,
  this.topping = [topping]
}

// Creating a prototype to add up collected data from the user and add total cost
pizzaOrder.prototype.addNewPizza = function(size, topping) {
  this.items += 1;
  var userPizza = new Pizza (userName, size, topping);
  userPizza.id = this.items;
  this.pizza.push(userPizza);
}

pizzaOrder.prototype.findPizza = function(id) {
  for (var i=0; i< this.pizza.length; i++) {
    if (this.pizza[i].id === id) {
      return this.pizza[i];
    };
  };
};

pizzaOrder.prototype.addPrice = function() {
  var price = 0;
  var pizza = userPizza.findPizza(pizzaId);
  this.pizzas.forEach (function(pizza){
    if (pizza.size === "Small (12\")") {
      price += 18;
    } else if (pizza.size === "Large(18\")") {
      price += 20;
    }
  })
console.log("test");
    for (var i=0; i < pizza.topping[0].length; i++) {
      if (price === 20) {
        price += 2;
      } if (price === 18) {
        price += 1;
      }
    }
    return price;
  };
});

  // var totalCost = ("$") + (parseInt(this.size)) + (parseInt(this.topping));
  // this.addTotal = totalCost;

// Radio buttons submit values
function selectSize(userSelects) {
  if (userSelects === option1) {
    return
  }
}

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
    var userSize = $("#pizzaSize").val();
    var userTopping = $("#pizzaTopping").val();
    var submitType = $("input:radio[name=exampleRadios]:checked").val();
    var finalOrder = new pizzaOrder(nameInput, userSize, userTopping);
    $(".name").text(nameInput);
    $(".size").text(userSize);
    $(".topping").text(userTopping);
    finalOrder.addTotal();
    $(".total").text(finalOrder.addTotal);
  });
});
