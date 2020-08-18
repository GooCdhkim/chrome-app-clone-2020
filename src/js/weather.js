const weather = document.querySelector("#weather");
const COORD = "coords";
const apiKey = "4e83f3c3bbdc831502a136ed71e1ae5f";
const imgUrl = "http://openweathermap.org/img/wn/";

function getIconElement() {}

function getWeatherImg(imgName) {
    const imgSrc = `${imgUrl}${imgName}@2x.png`;
    const img = document.createElement("img");
    img.alt = imgName;
    img.src = imgSrc;
    return img;
}

function getWeather(lat, lon) {
    fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
        )
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            console.log(json.weather[0].icon)
            const temperature = json.main.temp;
            const place = json.name;
            if (json && json.weather && json.weather.length == 1) {
                const img = getWeatherImg(json.weather[0].icon);
                weather.appendChild(img);
            }
            const span = document.createElement("span");
            const h4 = document.createElement("h4");
            weather.appendChild(span);
            weather.appendChild(h4);
            span.innerText = ` ${place}`;
            h4.innerText = `${Math.round(temperature)}℃`;

        });
}

function saveCoords(coordsObj) {
    localStorage.setItem(COORD, JSON.stringify(coordsObj));
}

function handleGeoSucces(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude,
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError() {
    console.log("Cant access geo location");
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORD);
    if (loadedCoords === null) {
        askForCoords();
    } else {
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}


loadCoords();