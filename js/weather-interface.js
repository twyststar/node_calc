var apiKey = "adcc64e09e70451baea4c4cc4ab546ba";

$(document).ready(function() {
  $('#weather-location').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $('.showWeather').text("The city you have chosen is " + city + ".");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey, function(response) {
    $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%");
    });
  });
});
