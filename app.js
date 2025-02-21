document.getElementById('getWeather').addEventListener('click', function () {
  const city = document.getElementById('city').value;
  const apiKey = 'cca03c6a2cea48c5bae120747252102';
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&lang=en`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.error) {
        alert('City not found. Please try again.');
      } else {
        // Weather data
        const weather = data.current.condition.text;
        const temp = data.current.temp_c;
        const cityName = data.location.name;

        // Display data on the page
        document.getElementById('cityName').innerText = `City: ${cityName}`;
        document.getElementById('temperature').innerText = `Temperature: ${temp}°C`;
        document.getElementById('weatherDescription').innerText = `Weather: ${weather}`;
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('An error occurred while retrieving weather data.');
    });
});