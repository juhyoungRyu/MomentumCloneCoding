const API_KEY = "203a7ce25e898c0f80c7e8316fb90304"

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`
    console.log(url);
}

function onGeoError() {
    alert("Can't find you... No weather for you :( ");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

fetch(url);