"use strict";


// PART 1: SHOW A FORTUNE
function getFortune(fortunez) {
	$('#fortune-text').html(fortunez);
}

function showFortune(evt) {

    // TODO: get the fortune and show it in the #fortune-text div
	$.get('/fortune', getFortune);
}

$('#get-fortune-button').on('click', showFortune);



// PART 2: SHOW WEATHER
function getWeather(results) {
	$('#weather-info').html(results.forecast + ' ' +results.temp);
	// $('#weather-info').html(results.temp);
}

function showWeather(evt) {
    evt.preventDefault();

    var url = "/weather.json?zipcode=" + $("#zipcode-field").val();

    // TODO: request weather with that URL and show the forecast in #weather-info
    $.get(url, getWeather)
    // console.log(getWeather);
}

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);


