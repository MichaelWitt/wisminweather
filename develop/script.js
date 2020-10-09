$(document).ready(function () {

    // call readLocalStorage() 


    var APIKey = '166a433c57516f51dfab1f7edaed8413';

    // Today's Forecast
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

            $('#cityTemp').text(response.main.temp + '°')
            $('#cityName').text(response.name)
            $('#cityHumidity').text(response.main.humidity + '%')
            $('#cityWindspeed').text(response.wind.speed + ' mph')
            $('#weatherIcons').attr('src', 'https://openweathermap.org/img/w/' + response.weather[0].icon + '.png')
            var date = new Date().toLocaleDateString()
            console.log(date)
            $('#currentDate').text(date)

            var latitude = response.coord.lat
            var longitude = response.coord.lon


            // Gets UV Index
            var queryURLUv = 'https://api.openweathermap.org/data/2.5/uvi?lat=' + latitude + '&lon=' + longitude + '&appid=' + APIKey;

            $.ajax({
                url: queryURLUv,
                method: 'GET',
            }).then(function (response) {
                console.log('response:', response)
                $('#cityUvindex').text(response.value)


                //5 Day Forecast
                var queryURL5Day = 'https://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&appid=' + APIKey + '&units=imperial';

                $.ajax({
                    url: queryURL5Day,
                    method: 'GET',
                }).then(function (response) {
                    console.log('response:', response)

                    // var today = new Date()
                    // var tomorrow = new Date(today)
                    // tomorrow.setDate(tomorrow.getDate() + 1)
                    // console.log('tomorrow:', tomorrow)

                    $('#Day2Date').text(date++)
                    $('#Day2Temp').text('Temp: ' + response.list[7].main.temp + '°')
                    $('#Day2Humidity').text('Humidity: ' + response.list[7].main.humidity + '%')
                    $('#Day2Icon').attr('src', 'https://openweathermap.org/img/w/' + response.list[7].weather[0].icon + '.png')

                    $('#Day3Date').text(date)
                    $('#Day3Temp').text('Temp: ' + response.list[15].main.temp + '°')
                    $('#Day3Humidity').text('Humidity: ' + response.list[15].main.humidity + '%')
                    $('#Day3Icon').attr('src', 'https://openweathermap.org/img/w/' + response.list[15].weather[0].icon + '.png')

                    $('#Day4Date').text(date)
                    $('#Day4Temp').text('Temp: ' + response.list[23].main.temp + '°')
                    $('#Day4Humidity').text('Humidity: ' + response.list[23].main.humidity + '%')
                    $('#Day4Icon').attr('src', 'https://openweathermap.org/img/w/' + response.list[23].weather[0].icon + '.png')

                    $('#Day5Date').text(date)
                    $('#Day5Temp').text('Temp: ' + response.list[31].main.temp + '°')
                    $('#Day5Humidity').text('Humidity: ' + response.list[31].main.humidity + '%')
                    $('#Day5Icon').attr('src', 'https://openweathermap.org/img/w/' + response.list[31].weather[0].icon + '.png')

                    $('#Day6Date').text(date)
                    $('#Day6Temp').text('Temp: ' + response.list[39].main.temp + '°')
                    $('#Day6Humidity').text('Humidity: ' + response.list[39].main.humidity + '%')
                    $('#Day6Icon').attr('src', 'https://openweathermap.org/img/w/' + response.list[39].weather[0].icon + '.png')


                })
            })
        })
    })







    // make a function to read local storage
    // if there are cities saved, make them into buttons
    // append them to the page 

    // make another function to write to local storage
    // when a city is searched, 
    // add that city to the local storage array of cities 
    // check if it already exists, if it does, don't add it



});