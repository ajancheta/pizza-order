// Business Interface Logic ------------------------>

// Creating an object to store collected pizza data
function userOrder (userName, size, topping) {
  this.userName = userName,
  this.size = size,
  this.topping = topping
}

// Creating a prototype to add up collected data from the user and add total cost of user prefered size and topping
userOrder.prototype.addPrice = function() {
  this.total = (parseInt(this.size)) + (parseInt(this.topping));
  return this.total;
};

//
// userOrder.prototype.selectTwoOptions = function() {
//   if (this.total <=15) {
//   }  alert("Please select a topping");
// }

// User Interface Logic ------------------------>
$(document).ready(function(){
  $(".welcome").click(function(event) {
    event.preventDefault();
    $("#wellOne").show();
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
