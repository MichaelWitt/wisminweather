$(document).ready(function () {


    // Retrieves Searched Cities
    var history = JSON.parse(window.localStorage.getItem("history")) || [];


    // Hides Container

    $("#search-button").click(function () {
        $("#container-display").removeClass('d-none');
    });


    // Weather Forecast
    function getWeather(cityName) {

        String.prototype.capitalize = function () {
            return this.charAt(0).toUpperCase() + this.slice(1);
        }

        if (history.indexOf(cityName.capitalize()) === -1) {
            history.push(cityName.capitalize());
            window.localStorage.setItem("history", JSON.stringify(history));
            $("#cityListings").append(`<li><button class="city-click btn btn-primary btn-lg stored-cities mb-1">${cityName.capitalize()}</button></li>`);
        }
        localStorage.clear()

        // Links Weather API to Website

        var APIKey = '166a433c57516f51dfab1f7edaed8413';

        var queryURL =
            'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' +
            APIKey + '&units=imperial';


        $.ajax({
            url: queryURL,
            method: 'GET',
        }).then(function (response) {


            $('#cityTemp').text('Temperature: ' + response.main.temp + '°')
            $('#cityName').text(response.name)
            $('#cityHumidity').text('Humidity: ' + response.main.humidity + '%')
            $('#cityWindspeed').text('Wind Speed: ' + response.wind.speed + ' mph')
            $('#weatherIcons').attr('src', 'https://openweathermap.org/img/w/' + response.weather[0].icon + '.png')

            var date = new Date().toLocaleDateString()
            $('#currentDate').text(date)
            var latitude = response.coord.lat
            var longitude = response.coord.lon


            // Gets UV Index

            var queryURLUv = 'https://api.openweathermap.org/data/2.5/uvi?lat=' + latitude + '&lon=' + longitude + '&appid=' + APIKey;

            $.ajax({
                url: queryURLUv,
                method: 'GET',
            }).then(function (response) {
                $('#cityUvindex').text(response.value)

                var uvButton = response.value;

                if (uvButton < 2) {
                    $('#cityUvindex').addClass('fair')
                }

                if (uvButton > 6) {
                    $('#cityUvindex').addClass('severe')
                }


                // 5 Day Forecast

                var queryURL5Day = 'https://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&appid=' + APIKey + '&units=imperial';

                $.ajax({
                    url: queryURL5Day,
                    method: 'GET',
                }).then(function (response) {

                    var today = new Date()
                    var day2 = new Date(today)
                    day2.setDate(day2.getDate() + 1)
                    var day3 = new Date(day2)
                    day3.setDate(day3.getDate() + 1)
                    var day4 = new Date(day3)
                    day4.setDate(day4.getDate() + 1)
                    var day5 = new Date(day4)
                    day5.setDate(day5.getDate() + 1)
                    var day6 = new Date(day5)
                    day6.setDate(day6.getDate() + 1)


                    $('#Day2Date').text(day2.toLocaleDateString())
                    $('#Day2Temp').text('Temp: ' + response.list[7].main.temp + '°')
                    $('#Day2Humidity').text('Humidity: ' + response.list[7].main.humidity + '%')
                    $('#Day2Icon').attr('src', 'https://openweathermap.org/img/w/' + response.list[7].weather[0].icon + '.png')

                    $('#Day3Date').text(day3.toLocaleDateString())
                    $('#Day3Temp').text('Temp: ' + response.list[15].main.temp + '°')
                    $('#Day3Humidity').text('Humidity: ' + response.list[15].main.humidity + '%')
                    $('#Day3Icon').attr('src', 'https://openweathermap.org/img/w/' + response.list[15].weather[0].icon + '.png')

                    $('#Day4Date').text(day4.toLocaleDateString())
                    $('#Day4Temp').text('Temp: ' + response.list[23].main.temp + '°')
                    $('#Day4Humidity').text('Humidity: ' + response.list[23].main.humidity + '%')
                    $('#Day4Icon').attr('src', 'https://openweathermap.org/img/w/' + response.list[23].weather[0].icon + '.png')

                    $('#Day5Date').text(day5.toLocaleDateString())
                    $('#Day5Temp').text('Temp: ' + response.list[31].main.temp + '°')
                    $('#Day5Humidity').text('Humidity: ' + response.list[31].main.humidity + '%')
                    $('#Day5Icon').attr('src', 'https://openweathermap.org/img/w/' + response.list[31].weather[0].icon + '.png')

                    $('#Day6Date').text(day6.toLocaleDateString())
                    $('#Day6Temp').text('Temp: ' + response.list[39].main.temp + '°')
                    $('#Day6Humidity').text('Humidity: ' + response.list[39].main.humidity + '%')
                    $('#Day6Icon').attr('src', 'https://openweathermap.org/img/w/' + response.list[39].weather[0].icon + '.png')

                })
            })
        })
    }

    // Listens For Button Click
    $(document).on('click', '.city-click', function () {
        var city = $(this).text()
        getWeather(city);
    })

    // Listens For Search Button Click
    $('#search-button').click(function () {
        var cityName = $('#searchedCity').val();
        getWeather(cityName)
    })


});