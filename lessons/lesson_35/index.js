
const getCurrentWeather = () => {
  return '+' + Math.floor((Math.random() * 10) + 1) + 'C';
}

const setNewWeatherInDom = () => {
  const storageWeatherDate = localStorage.getItem('weather-date');

  if (hoursDifference(new Date(), new Date(storageWeatherDate)) < 2) {
    const storageWeather = localStorage.getItem('weather');
    console.log(storageWeather);

    updateWeatherInDom(storageWeather);
    return;
  } else {
    const currentWeather = getCurrentWeather();

    updateWeatherInDom(currentWeather);
    setWeatherInStorage(currentWeather);
  }
}
const setWeatherInStorage = (weather) => {
  localStorage.setItem('weather', weather);
  localStorage.setItem('weather-date', new Date());
}

function hoursDifference(dt2, dt1) {
  let diff = (dt2.getTime() - dt1.getTime()) / 1000;
  diff /= (60 * 60);
  return Math.abs(Math.round(diff));
}

const updateWeatherInDom = (weather) => {
  const weatherElement = document.getElementById('js-weather');
  weatherElement.innerText = weather;
}

setNewWeatherInDom();

