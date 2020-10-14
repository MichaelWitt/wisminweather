$(document).ready(function () {



    // //  onpage load read local storage
    // readLocalStorage()
    // // loop over cities in local storage array
    // for (let i = 0; i < citiesSearched.length; i++) {
    // }
    // // empty div first 
    // $('#stored-city-display').empty()
    // // build button for each one
    // $('#stored-city-display').append(cityName)
    // // append buttons to page

    // var citiesSearched = $(this).siblings('.stored-cities').val();;
    // console.log('citiesSearched:', citiesSearched)

    // localStorage.setItem('city-list', JSON.stringify(citiesSearched))

    // JSON.parse(localStorage.getItem('city-list'))

    /*
  var citiesSearched = $(this).siblings('.stored-cities').val();;
    console.log('citiesSearched:', citiesSearched)

    localStorage.setItem('city-list', JSON.stringify(citiesSearched))

    JSON.parse(localStorage.getItem('city-list'))


       $('.saveBtn').on('click', function () {
            var value = $(this).siblings('.description').val();
            var time = $(this).parent().attr('id');
            localStorage.setItem(time, value);
        });
    
        $('#9 .description').val(localStorage.getItem('9'));
        $('#10 .description').val(localStorage.getItem('10'));
        $('#11 .description').val(localStorage.getItem('11'));
        $('#12 .description').val(localStorage.getItem('12'));
        $('#13 .description').val(localStorage.getItem('13'));
        $('#14 .description').val(localStorage.getItem('14'));
        $('#15 .description').val(localStorage.getItem('15'));
        $('#16 .description').val(localStorage.getItem('16'));
        $('#17 .description').val(localStorage.getItem('17'));
    
    });
    */




    $("#search-button").click(function () {
        $("#container-display").removeClass('d-none');
    });


    var APIKey = '166a433c57516f51dfab1f7edaed8413';

    // Today's Forecast
    $('#search-button').click(function (e) {
        e.preventDefault()

        // localStorage.setItem(city, i);

        // read local storage

        // save as array of cities

        // add new city to array

        // set local storage

        // call build button function



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

            $('#cityTemp').text('Temperature: ' + response.main.temp + '°')
            $('#cityName').text(response.name)
            $('#cityHumidity').text('Humidity: ' + response.main.humidity + '%')
            $('#cityWindspeed').text('Wind Speed: ' + response.wind.speed + ' mph')
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

                var uvButton = response.value;

                if (uvButton < 2) {
                    $('#cityUvindex').addClass('fair')
                }

                if (uvButton > 6) {
                    $('#cityUvindex').addClass('severe')
                }


                //5 Day Forecast
                var queryURL5Day = 'https://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&appid=' + APIKey + '&units=imperial';

                $.ajax({
                    url: queryURL5Day,
                    method: 'GET',
                }).then(function (response) {
                    console.log('response:', response)

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
    })






});