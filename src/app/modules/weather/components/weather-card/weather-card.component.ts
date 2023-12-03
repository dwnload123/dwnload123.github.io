import { Component, Input, OnInit } from '@angular/core';
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
export class WeatherCardComponent implements OnInit {
  @Input() weatherDatas!: WeatherDatas;

  minTemperaturaIcon = faTemperatureLow;
  maxTemperatureIcon = faTemperatureHigh;
  humidityIcon = faDroplet;
  windIcon = faWind;

  ngOnInit(): void {
    console.log('DADOS DO COMPONENTE pai - WHEATER card:', this.weatherDatas);
  }

}
