let long
let lat
let temp = document.querySelector('.temperature-value')
let description = document.querySelector('.temperature-description')
let notification = document.querySelector('.notification')
let ourIcon = document.querySelector('img')
let zone = document.querySelector('.location')
KELVIN = 273
if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(setPosition, showErr)
}else{
    notification.innerHTML = alert('Sorry your browzer does not support the weather x_x')
}
function setPosition(position){
    long = position.coords.longitude
    lat = position.coords.latitude
    getWeather(long, lat)
}
function showErr(error){
    notification.style.height = '20%'
    notification.innerHTML = `<p> ${error.message} </p>`
}
key = "182a8e652c1d041d98a733797b2728ae"
function getWeather(long, lat){
    api = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}`
    getData(api)
}
async function getData(api){
    const response = await  fetch(api)
    const data = await response.json()
    console.log(data)
    ApplyWeather(data)
    /* data.weather[0].description
    data.name
    data.sys.country
    data.weather[0].icon */
}
function ApplyWeather(e){
    temp.innerHTML = `<span>${Math.floor(e.main.temp - KELVIN)}°</span>C`
    description.innerHTML = e.weather[0].description
    zone.innerHTML = `${e.sys.country}, ${e.name}`
    ourIcon.src = `icons/${e.weather[0].icon}.png`
}