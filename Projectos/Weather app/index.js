const apiKey = "37e83cf5d5187a365c932d3186cb451b";
const weatherDataEl = document.getElementById("weather-data");
const cityInputEl = document.getElementById("city-input");
const formEl = document.querySelector("form");

formEl.addEventListener("submit", (event)=>{
    event.preventDefault(); //evita que se refresque la página al dar click al botón
    const cityValue = cityInputEl.value;
    getWeatherData(cityValue);
    console.log(cityValue);
})


async function getWeatherData(cityValue){//función con delay en alguna línea, en este caso await.
    try { //await obliga a esperar respuesta antes de continuar ejecutando el código
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`);
        if(!response.ok){
            throw new error("Network response was not ok");
        }

        const data = await response.json();
        const temperature = MATH.round(data.main.temp);
        const Description = data.weather[0].description;
        const icon = data.weather[0].icon;
        const details = [
            `Feels like: ${MATH.round(data.main.feels_like)}`, `Humidity: ${data.main.humidity}`, `Wind Speed: ${data.main.speed}`
        ];

        weatherDataEl.querySelector(".icon").innerHTML = <img src="http://openweathermap.org/img/wn/${icon}.png" alt="Weather Icon"></img>;

        weatherDataEl.querySelector(".temperature").textContent = `Temperature: ${temperature}°`
    } catch (error) {
        
    }
}