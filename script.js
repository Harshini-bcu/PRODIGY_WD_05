// script.js
const apiKey = 'YOUR_API_KEY_HERE'; // Replace with your OpenWeatherMap API key

document.getElementById('getWeatherBtn').addEventListener('click', function() {
    const location = document.getElementById('locationInput').value;
    fetchWeather(location);
});

function fetchWeather(location) {
    const url = https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric;
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                displayWeather(data);
            } else {
                document.getElementById('weatherResult').innerText = 'Location not found.';
            }
        })
        .catch(error => console.error('Error fetching weather data:', error));
}

function displayWeather(data) {
    const weatherResult = document.getElementById('weatherResult');
    const weatherDetails = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${data.main.temp} °C</p>
        <p>Condition: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;
    weatherResult.innerHTML = weatherDetails;
}