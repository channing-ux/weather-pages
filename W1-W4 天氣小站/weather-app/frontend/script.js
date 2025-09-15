async function getWeather(city) {
  const response = await fetch(`http://localhost:3000/api/weather/${city}`);
  const data = await response.json();

  document.getElementById("result").innerHTML = `
    <h2>${data.name} 天氣</h2>
    <p>氣溫：${data.main.temp}°C</p>
    <p>天氣：${data.weather[0].description}</p>
  `;
}
