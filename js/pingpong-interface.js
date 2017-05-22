var Calculator = require('./../js/pingpong.js').calculatorModule;

$(document).ready(function() {
  $('#ping-pong-form').submit(function(event) {
    event.preventDefault();
    var goal = $('#goal').val();
    var simpleCalculator = new Calculator("hot pink");
    var output = simpleCalculator.pingPong(goal);
    output.forEach(function(element) {
      $('#solution').append("<li>" + element + "</li>");
    });
  });
  $("form#calculator").submit(function(event) {
      event.preventDefault();
      var a = parseInt($("#input1").val());
      var b = parseInt($("#input2").val());
      var simpleCalculator = new Calculator("hot pink");
      var operator = $("input:radio[name=operator]:checked").val();
      var result;
      if (operator === "add"){
        var output = simpleCalculator.add(a,b);
      } else if (operator === "subtract"){
        var output = simpleCalculator.subtract(a,b);
      } else if (operator === "multiply"){
        var output = simpleCalculator.multiply(a,b);
      } else if (operator = "divide"){
        var output = simpleCalculator.divide(a,b);
      }
      $('#output').text(output);

    });

});
