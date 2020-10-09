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

            $('#cityTemp').text(response.main.temp)
            $('#cityName').text(response.name)
            $('#cityHumidity').text(response.main.humidity)
            $('#cityWindspeed').text(response.wind.speed)
            $('#weatherIcons').attr('src', 'https://openweathermap.org/img/w/' + response.weather[0].icon + '.png')
            var date = new Date().toLocaleDateString()
            console.log(date)
            $('#currentDate').text(date)

            var latitude = response.coord.lat
            console.log('latitude:', latitude)
            var longitude = response.coord.lon
            console.log('longitude:', longitude)


            // Gets UV Index
            var queryURLUv = 'http://api.openweathermap.org/data/2.5/uvi?lat=' + latitude + '&lon=' + longitude + '&appid=' + APIKey + '&units=imperial';

            $.ajax({
                url: queryURLUv,
                method: 'GET',
            }).then(function (response) {
                console.log('response:', response)
                $('#cityUvindex').text(response.value)
            })

            // var queryURL5Day = 'api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&appid=' + APIKey + '&units=imperial';





        })


    })

    // $('#search-button').click(function (e) {
    //     e.preventDefault()

    //     var queryURLUv = 'https://api.openweathermap.org/data/2.5/uvi?appid=' + APIKey + '&lat=' + latitude + '&lon=' + longitude;
    //     // 'http://api.openweathermap.org/data/2.5/uvi?lat=' + latitude + '&lon=' + longitude + '&appid=' + APIKey + '&units=imperial';

    //     $.ajax({
    //         url: queryURLUv,
    //         method: 'GET',
    //     }).then(function (response) {
    //         console.log('response:', response)
    //         $('#cityUvindex').text(response.value)


    //     })
    // })




    // we need to get UV index
    // getUvIndex(cityName);
    // getFivedayForecast(cityName);

    // make a functino to get the 5 day forecast

    // make a function to read local storage
    // if there are cities saved, make them into buttons
    // append them to the page 

    // make another function to write to local storage
    // when a city is searched, 
    // add that city to the local storage array of cities 
    // check if it already exists, if it does, don't add it



});