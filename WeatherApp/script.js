function getWeather(cityZip) {
  const url = `http://api.openweathermap.org/data/2.5/weather?zip=${cityZip}&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&units=imperial`;

  axios
    .get(url)

    .then(function(response) {
      document.getElementById(
        "message"
      ).innerText = `It is now ${response.data.main.temp}°f in ${response.data.name}.`;
    })
    .catch(function(error) {
      document.getElementById("message").innerText = error;
    })
    .finally(function() {
      // always executed
      console.log("All Done!");
    });
}

window.onload = function() {
  document.getElementById("sendButton").onclick = function() {
    const cityZip = document.getElementById("zipTextInput").value;
    getWeather(cityZip);
  };
};
