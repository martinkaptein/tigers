//init start
var x = document.getElementById("hiddenMenu");
x.style.display = "none";
//init end


var menuButton = document.getElementById("menuButton");

menuButton.addEventListener('click',function() {
  var x = document.getElementById("hiddenMenu");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
});	
