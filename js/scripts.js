// Business Interface Logic ------------------------>

// Creating an object to store collected pizza data
function Order (size, topping) {
  this.size = size,
  this.topping = topping,
  this.cost = 0,
  this.toppingCost = 4
}

function add(size, topping) {
  return size + topping;
}

// Creating a function to add up total of user's selected topping data
Order.prototype.toppingTotal = function() {
  this.toppingCost += this.topping.length;
}

// Creating a function to add the size and topping input
Order.prototype.totalCost = function() {
  this.cost += add(this.size, this.toppingCost);
}

// Create a funciton to print out the total cost
Order.prototype.printOrder = function() {
  return this.cost;
}


// Key up and key down effects for the first form input
function textEffects() {
  $("input").keydown(function(){
  $("input").css("background-color", "#FF94FF");
  $("input").css("color", "#42f4e5");
});
$("input").keyup(function(){
  $("input").css("color", "#984FEA");
});
}

// User Interface Logic ------------------------>
$(document).ready(function(){
  $(".welcome").click(function(event) {
    event.preventDefault();
    $("#wellOne").show();
    textEffects();
    $(".jumbotron").hide();

  });

  $("button#nameButton").click(function(event) {
    event.preventDefault();
    $(".jumbotron").fadeToggle();
    $(".welcome").hide();
    var nameInput = $("input#userName").val();
    $("#formName").hide();
    $("#wellTwo").fadeToggle();
    $(".name").text(nameInput);

    });

  $("#orderForm").submit(function(event){
    event.preventDefault();
    var nameInput = $("input#userName").val();
    var sizeInput = parseInt($("#size").val());
    var toppingInput = [];
    $("input:checkbox[name=topping]:checked").map(function(){
      toppingInput.push($(this).val());

    });

    var finalOrder = new Order (sizeInput, toppingInput);
    finalOrder.toppingTotal();
    finalOrder.totalCost();
    finalOrder.printOrder();
    var finalTotal = finalOrder.printOrder();
    $("#result").fadeToggle();
    $(".total").text("$" + finalTotal + ".00");
  });
});
