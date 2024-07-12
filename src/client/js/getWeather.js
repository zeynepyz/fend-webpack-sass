document.getElementById('weatherForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    const apiKey = '35b97ffbc75ae753a764f2c84a1262bf'; // Replace with your OpenWeatherMap API key
    const city = document.getElementById('city').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
        document.getElementById('weatherResult').textContent = 'Error fetching weather data. Please try again.';
    }
});

function displayWeather(data) {
    const weatherResult = document.getElementById('weatherResult');
    weatherResult.innerHTML = `
        <h2>${data.name}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
    `;
}

export { displayWeather }