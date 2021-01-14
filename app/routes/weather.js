import Route from '@ember/routing/route';

export default class WeatherRoute extends Route {
  model() {
    return [
      'Sunny/Clear',
      'Partially cloudy',
      'Cloudy',
      'Overcast',
      'Rain',
      'Drizzle',
      'Snow',
      'Fog',
      'Stormy',
    ];
  }
}
