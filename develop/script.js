$(document).ready(function () {

    // call readLocalStorage() 


    var APIKey = '166a433c57516f51dfab1f7edaed8413';




    $('#search-button').click(function (e) {
        e.preventDefault()

        var cityName = $('#searchedCity').val();
        console.log(cityName)

        var queryURL =
            'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' +
            APIKey + '&units=imperial';

        $.ajax({
            url: queryURL,
            method: 'GET',
        }).then(function (response) {
            console.log('response:', response)

            // target elements in dom to update
            // target elements in dom to set text values .text
            //

            $('#cityTemp').text(response.main.temp)
            $('#cityName').text(response.name)
            $('#cityHumidity').text(response.main.humidity)
            $('#cityWindspeed').text(response.wind.speed)
            $('#weatherIcons').attr('src', 'https://openweathermap.org/img/w/' + response.weather[0].icon + '.png')
            var date = new Date().toLocaleDateString()
            console.log(date)
            $('#currentDate').text(date)

            // we need to get UV index
            // getUvIndex(cityName);
            // getFivedayForecast(cityName);
        })

    })

    // var getUvIndex = (city) => {
    //     // other url is forecast
    //     var queryURL =
    //         'https://api.openweathermap.org/data/2.5/uvi?q=' + city + '&appid=' +
    //         APIKey + '&units=imperial';


    //     $.ajax({

    //     })
    // }

    // $("<img>").attr("src", "http://openweathermap.org/img/w/" + response.weather[0].icon + ".png");

    // make a functino to get the 5 day forecast

    // make a function to read local storage
    // if there are cities saved, make them into buttons
    // append them to the page 

    // make another function to write to local storage
    // when a city is searched, 
    // add that city to the local storage array of cities 
    // check if it already exists, if it does, don't add it






    // We then created an AJAX call
    // $.ajax({
    //     url: queryURL,
    //     method: 'GET',
    // }).then(function (response) {
    //     console.log('queryURL:', queryURL);
    //     console.log('response:', response);
    //     $('.city').html('<h1>' + response.name + 'Weather Details</h1>');
    //     $('.wind').html('<h1>' + response.wind.speed + ' Wind speed</h1>');
    //     $('.humidity').html('<h1>' + response.main.humidity + ' Humidity</h1>');
    //     // Convert the temp to fahrenheit
    //     var tempF = (response.main.temp - 273.15) * 1.8 + 32;
    //     // add temp content to html
    //     $('.temp').text('Temperature (K) ' + response.main.temp);
    //     $('.tempF').text('Temperature (F) ' + tempF.toFixed(2));
    //     // Log the data in the console as well
    //     console.log('Wind Speed: ' + response.wind.speed);
    //     console.log('Humidity: ' + response.main.humidity);
    //     console.log('Temperature (F): ' + tempF);


});