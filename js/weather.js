const API_KEY = "7f30401d53274393924d74e3c95adba2"

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    fetch(url).then(Response => Response.json()).then(data => {
        const weatherContainer = document.querySelector("#weather span:last-child");
        const cityContainer = document.querySelector("#weather span:first-child");
        cityContainer.innerText = `${data.name} / `;
        weatherContainer.innerText = ` ${data.weather[0].main} / ${data.main.temp}°`
    });
}
function onGeoError() {
    alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);