import { Route } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { WeatherComponent } from './pages/main/weather/weather.component';

export const routes: Route[] = [
  { path: '', component: MainComponent },
  { path: 'weather', component: WeatherComponent },
];
