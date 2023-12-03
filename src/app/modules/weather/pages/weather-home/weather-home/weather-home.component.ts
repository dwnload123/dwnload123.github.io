import { Component } from '@angular/core';
import { WeatherService } from '../../../services/weather.service';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: ['./weather-home.component.scss']
})
export class WeatherHomeComponent {
  initialCityName = 'Uberlândia';

  constructor(
    private weatherService: WeatherService,
  ) {}

  ngOnInit(): void {
    this.getWheatherDatas(this.initialCityName);
  }

  getWheatherDatas(cityName: string) {
    this.weatherService.getWeatherDatas(cityName)
    .subscribe({
      next: (response) => {
        console.log('response', response)
      },
      error: (error) => {
        console.log('error', error)
      },
      complete: () => {
        console.log('complete')
      },
    })
  }
}
