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

  $('#add-form').submit(function(event) {
    event.preventDefault();
    var a = parseInt($('#a').val());
    var b = parseInt($('#b').val());
    var simpleCalculator = new Calculator("hot pink");
    var output = simpleCalculator.add(a,b);
    $('#solution').text(output);
  });
});
