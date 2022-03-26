let form = document.querySelector('form')
let input = document.querySelector('input')
let city = document.querySelector('#city')
let temp = document.querySelector('#temp')
let description = document.querySelector('#description')
let humidity = document.querySelector('#humidity')
let windSpeed = document.querySelector('#windSpeed')


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

form.addEventListener('submit',async (e)=>{
    e.preventDefault()

    try{
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=9bf687840d33efbfe1c4be7733846593&units=metric`)
    //city name
    city.innerText = `${res.data.name}`
    //temperature
    temp.innerText = `${res.data.main.temp} °C`
    //temp description
    let tempDesc = res.data.weather[0].description
    tempDesc = capitalizeFirstLetter(tempDesc)
    description.innerText = tempDesc
    //humidity
    humidity.innerText = `Humidity : ${res.data.main.humidity}%`
    //wind speed
    windSpeed.innerText = `Wind speed : ${res.data.wind.speed} kmph`
    }
    // If city not found
    catch(e){
        city.innerText = description.innerText = humidity.innerText = windSpeed.innerText =''
        temp.innerText = `Enter a valid city name!`
    }
    input.value = ''
})
