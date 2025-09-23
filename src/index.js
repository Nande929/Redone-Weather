function showTemperature (response) {

    let city = document.querySelector("#cityName");
    let temperature = document.querySelector("#temp");

    city.innerHTML = response.data.city;
    temperature.innerHTML = `${Math.round(response.data.temperature.current)}°C`;
}

function requestApi(city) {

    let apiKey = "e2b85d39ocbf2atcfebaabf3b2422057"
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`

    axios.get(apiUrl).then(showTemperature);
}

function displayWeather(event) {
    event.preventDefault();

   let searchInput = document.getElementById("search-form-input");
   requestApi(searchInput.value)
}

let weatherForm = document.querySelector("#search-form");
weatherForm.addEventListener("submit", displayWeather);

function currentDate(date) {

    let minutes = date.getMinutes();
    let hours = date.getHours();
    let day = date.getDay();

    if (minutes < 10 && hours < 10) {

        minutes = `0${minutes}`;
        hours = `0${hours}`;
    }

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let wordedDays = days[day];
    return `${wordedDays} ${hours}:${minutes}`
}

let realDate = document.getElementById("myDate");
let weatherDate = new Date();

realDate.innerHTML = currentDate(weatherDate);
