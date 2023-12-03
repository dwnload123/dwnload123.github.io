import { Component, OnInit, OnDestroy } from '@angular/core';
import { WeatherService } from '../../../services/weather.service';
import { WeatherDatas } from 'src/app/models/interface/WeatherDatas';
import { Subject, takeUntil } from 'rxjs';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: ['./weather-home.component.scss']
})
export class WeatherHomeComponent implements OnInit, OnDestroy {

  private readonly destroy$: Subject<void> = new Subject();
  initialCityName = 'Uberlândia';
  weatherDatas!: WeatherDatas;
  searchIcon = faMagnifyingGlass;

  constructor(
    private weatherService: WeatherService,
  ) {}

  ngOnInit(): void {
    this.getWheatherDatas(this.initialCityName);
  }

  getWheatherDatas(cityName: string) {
    this.weatherService.getWeatherDatas(cityName)
    .pipe(
      takeUntil(this.destroy$)
    )
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

  onSubmit(): void {
    this.getWheatherDatas(this.initialCityName);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
