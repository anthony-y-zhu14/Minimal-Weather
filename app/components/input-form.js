import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class InputFormComponent extends Component {
  @action
  search(e) {
    if (e.keyCode === 13) {
      this.handleAPIcall();
    }
  }
  @action
  async APIcall(input) {
    let api_key = 'eddc7d58620682203ebfe99d76709097';
    let unit = 'metric';
    let api_url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${api_key}&units=${unit}`;
    const response = await fetch(api_url).catch(function (error) {
      console.log(error);
    });
    const body = response.json();
    return body;
  }
  @action
  handleAPIcall() {
    let userInput = document.getElementById('userInput');
    if (!userInput.value) {
      alert('how about enter something?');
      return;
    }
    let weatherField = document.getElementById('current_weather');
    let header = document.createElement('h1');
    let humidity = document.createElement('h1');
    let temp = document.createElement('h1');
    let weather = document.createElement('h1');
    this.APIcall(userInput.value).then((res) => {
      if (res.weather) {
        weatherField.innerHTML = '';
        header.innerHTML = `${res.name} Weather`;
        weather.innerHTML = res.weather[0].main;
        temp.innerHTML = `Tempeture: \n${res.main.temp} Celcius`;
        humidity.innerHTML = `Humidity: \n${res.main.humidity}%`;
        weatherField.appendChild(header);
        weatherField.appendChild(weather);
        weatherField.appendChild(temp);
        weatherField.appendChild(humidity);
      } else {
        weatherField.innerHTML = `could not find any data related to " ${userInput.value} "`;
      }
    });
  }
}

// {
//     "coord": {
//       "lon": -122.08,
//       "lat": 37.39
//     },
//     "weather": [
//       {
//         "id": 800,
//         "main": "Clear",
//         "description": "clear sky",
//         "icon": "01d"
//       }
//     ],
//     "base": "stations",
//     "main": {
//       "temp": 282.55,
//       "feels_like": 281.86,
//       "temp_min": 280.37,
//       "temp_max": 284.26,
//       "pressure": 1023,
//       "humidity": 100
//     },
//     "visibility": 16093,
//     "wind": {
//       "speed": 1.5,
//       "deg": 350
//     },
//     "clouds": {
//       "all": 1
//     },
//     "dt": 1560350645,
//     "sys": {
//       "type": 1,
//       "id": 5122,
//       "message": 0.0139,
//       "country": "US",
//       "sunrise": 1560343627,
//       "sunset": 1560396563
//     },
//     "timezone": -25200,
//     "id": 420006353,
//     "name": "Mountain View",
//     "cod": 200
//     }
