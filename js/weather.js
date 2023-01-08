const temp = document.querySelector(".weather span:first-child");
const weather = document.querySelector(".weather span:nth-child(2)");
const city = document.querySelector(".weather span:last-child");

function onGeoSuccess(userLocation) {
    const lat = userLocation.coords.latitude;
    const lon = userLocation.coords.longitude;
    const apiCall = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(apiCall)
        .then(response => response.json())
        .then(data => {
            temp.innerText = `${data.main.temp}°C`;
            weather.innerText = data.weather[0].main;
            city.innerText = data.name;
        })
}

function onGeoFail() {
    alert("Can't find location. Weather information is not provided.");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoFail);