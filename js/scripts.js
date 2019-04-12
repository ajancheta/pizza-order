// Business Interface Logic



// User Interface Logic
$(document).ready(function(){
$("button#nameButton").click(function(event) {
  event.preventDefault();

  var nameInput = $("input#userName").val();
  console.log("nameInput");
  $(".name").text(nameInput);

  })
});
