// write your code to ping the weather.gov API here!
// don't forget you can always console.log the result of your API calls to see what they return!
// here's a starting point. i've set up a request and a jsonResponse for you. now use the data in the response to make the weather appear on the page!

function makeAjaxCall(url, methodType, callback){
    return $.ajax({
       url : url,
       method : methodType,
       dataType : "json"
    })
   }
   // git hub url to get btford details
   var URL = 'https://api.weather.gov/gridpoints/MTR/88,126/forecast/hourly';
   makeAjaxCall(URL, "GET").then(function(jsonResponse){
        console.log(jsonResponse.properties.periods[0].shortForecast);
        
      let shortForecast = document.createElement('p')
      shortForecast.innerHTML = jsonResponse.properties.periods[0].shortForecast;
      

      let temperature = document.createElement('p')
      temperature.innerHTML = jsonResponse.properties.periods[0].temperature +  jsonResponse.properties.periods[0].temperatureUnit;
     document.body.style.backgroundColor = "green";

    let weather = document.getElementById("weather-display");
     weather.appendChild(shortForecast);
     weather.appendChild(temperature);

   }, function(reason){
    console.log("error in processing your request", reason);
    document.body.style.backgroundColor = "red";
   });



