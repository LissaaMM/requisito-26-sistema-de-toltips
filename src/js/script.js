
$(document).ready(function(){
  $(".tooltip").mousemove(function(event) {
    $(".text")[0].style.top = (event.pageY + 20) + "px";
    $(".text")[0].style.left = (event.pageX + 20) + "px";
  });
});