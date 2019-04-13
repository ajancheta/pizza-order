// Business Interface Logic ------------------------>

// Creating an object to store collected pizza data
function userOrder (userName, size, topping) {
  this.userName = userName,
  this.size = size,
  this.topping = topping
}

// Creating a prototype to add total cost depending on the user inputted data
userOrder.prototype.addPrice = function() {
  this.total = (parseInt(this.size)) + (parseInt(this.topping));
  return this.total;
};


// Key up and key down effects
function textEffects() {
  $("input").keydown(function(){
  $("input").css("background-color", "pink");
  $("input").css("color", "#42f4e5");
});
$("input").keyup(function(){
  $("input").css("color", "hotpink");
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
    var toppingInput = parseInt($("#topping").val());

// Creating a new object using the object constructor above to
    var finalOrder = new userOrder (nameInput, sizeInput, toppingInput);
    $("#result").fadeToggle();
    var finalTotal = finalOrder.addPrice();
    $(".name").text(nameInput);
    $(".total").text("$" + finalTotal + ".00");
  });
});
