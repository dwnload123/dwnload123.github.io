import { Component, Input } from '@angular/core';
import { WeatherDatas } from 'src/app/models/interface/WeatherDatas';
import {
  faTemperatureLow,
  faTemperatureHigh,
  faDroplet,
  faWind,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent {
  @Input() weatherDatas!: WeatherDatas;

  minTemperaturaIcon = faTemperatureLow;
  maxTemperatureIcon = faTemperatureHigh;
  humidityIcon = faDroplet;
  windIcon = faWind;

}
