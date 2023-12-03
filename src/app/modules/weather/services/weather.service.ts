import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = '892cfa4e802435f3eaa69c3e1db0bfe2';
  private baseUrl = 'https://api.openweathermap.org/data/2.5';

  constructor(
    private http: HttpClient,
  ) { }

  getWeatherDatas(cityName: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/weather?q=${cityName}&metric=units&mode=json&appid=${this.apiKey}`, {});
  }
}
