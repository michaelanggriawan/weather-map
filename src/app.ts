import './styles.css';

const form = document.getElementById('weather-form') as HTMLFormElement;
const locationInput = document.getElementById('location') as HTMLInputElement;
const weatherResult = document.getElementById('weather-result') as HTMLDivElement;

const apiKey = '6d72fac135019f9a6f4ea89e0b24a17b';

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const location = locationInput.value;
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`);
        const data = await response.json();
        if (data.cod === 200) {
            weatherResult.innerHTML = `
                <h2>${data.name}</h2>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Weather: ${data.weather[0].description}</p>
            `;
        } else {
            weatherResult.innerHTML = `<p>${data.message}</p>`;
        }
    } catch (error) {
        weatherResult.innerHTML = `<p>Unable to fetch weather data</p>`;
    }
});
