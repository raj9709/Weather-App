// ,
// `https://api.openweathermap.org/data/2.5/weather?id=${city id}&appid=${API key}`

const weatherApi = {
  key: "cf32196cb9d084a0ab00b7a4befbc6a8",
  baseURL: `https://api.openweathermap.org/data/2.5/weather`,
};
const baseURL1 = "cf32196cb9d084a0ab00b7a4befbc6a8";

const seacrhInputBox = document.getElementById("input-box");

seacrhInputBox.addEventListener("keypress", (event) => {
  if (event.keyCode == 13) {
    console.log(seacrhInputBox.value);
    getWeatherReport(seacrhInputBox.value);
    document.querySelector(".weather-app").style.display = "block";
  }
  let main = document.querySelector(".weather-app");
  if (seacrhInputBox === " ") {
    main.style.display = "none";
  }
});

function getWeatherReport(city) {
  fetch(`${weatherApi.baseURL}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then((weather) => {
      return weather.json();
    })
    .then(showWeatherReport);
    

}

function showWeatherReport(weather) {
//   console.log(weather);

  let city = document.getElementById("city");
  city.innerText = `${weather.name}, ${weather.sys.country}`;

  let temp = document.getElementById("temp");
  temp.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;

  let minmax = document.getElementById("min-max");
  minmax.innerHTML = `${Math.floor(
    weather.main.temp_min
  )}&deg;C [Min] / ${Math.ceil(weather.main.temp_max)}&deg;C [Max]`;

  let weatherType = document.getElementById("weatherType");
  weatherType.innerHTML = `${weather.weather[0].main}`;

  let date = document.getElementById("date");
  let todaydate = new Date();
  date.innerText = dateManegar(todaydate);

}


function dateManegar(dateArg) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let year = dateArg.getFullYear();
  let month = months[dateArg.getMonth()];
  let date = dateArg.getDate();
  let day = days[dateArg.getDay()];

  return `${date} ${month} [${day}], ${year}`;
}
