var pingPong = function(number) {
    var array = []
    for (var i = 1; i <= number; i++) {
      if ( i % 15 === 0) {
        array.push("pingpong");
        console.log(array);
      } else if ( i % 5 === 0) {
        array.push("pong");
        console.log(array);
      } else if ( i % 3 === 0) {
        array.push("ping");
        console.log(array);
      } else {
        array.push(i);
        console.log(array);
    }
  }
  return array;
};



$(document).ready(function(){
  $("form").submit(function(event){
    $("ul").empty();
    var number = parseInt($("input#number").val());
    var resultsArray =  pingPong(number);
    resultsArray.forEach(function(i) {
      $("#results").append("<li>" + i + "</li>");
    });
    $(".results").show();
    event.preventDefault();
  });
});
