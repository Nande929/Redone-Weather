function showTemperature (response) {

    //Displaying The data from the API on the page
    let city = document.querySelector("#cityName");
    let temperature = document.querySelector("#temp");
    let weatherCondition = document.querySelector("#weatherCondition");
    let humidity = document.querySelector("#humidity");
    let windSpeed = document.querySelector("#wind-speed");
    let realDate = document.getElementById("myDate");
    let date = new Date(response.data.time * 1000);
    let iconWeather = document.querySelector("#image-icon");


    city.innerHTML = response.data.city;
    temperature.innerHTML = `${Math.round(response.data.temperature.current)}°C`;
    weatherCondition.innerHTML = response.data.condition.description;
    humidity.innerHTML = `${response.data.temperature.humidity}%`;
    windSpeed.innerHTML = `${response.data.wind.speed}km/H`;
    realDate.innerHTML = `${currentDate(date)}`;
    iconWeather.innerHTML = `<img src="${response.data.condition.icon_url}">` 
    
}

function requestApi(city) {

    //Gathering/requesting information from the API

    let apiKey = "e2b85d39ocbf2atcfebaabf3b2422057"
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`

    axios.get(apiUrl).then(showTemperature);
}

function displayWeather(event) {

    //Taking in the value/city the user types passing the value to the requestApi() function
    event.preventDefault();

   let searchInput = document.getElementById("search-form-input");
   requestApi(searchInput.value)
}

let weatherForm = document.querySelector("#search-form");
weatherForm.addEventListener("submit", displayWeather);

function currentDate(date) {

    //Accurate dates depending on city time zones

    let minutes = date.getMinutes();
    let hours = date.getHours();
    let day = date.getDay();

    if (minutes < 10) {

        minutes = `0${minutes}`;
    }

    if (hours < 10) {

        hours = `0${hours}`
    }

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let wordedDays = days[day];
    return `${wordedDays} ${hours}:${minutes}`
}



requestApi("Rome")
