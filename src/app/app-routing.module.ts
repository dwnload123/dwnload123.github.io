import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherHomeComponent } from './modules/weather/pages/weather-home/weather-home/weather-home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'wheater',
    pathMatch: 'full',
  },
  {
    path: 'wheater',
    component: WeatherHomeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
