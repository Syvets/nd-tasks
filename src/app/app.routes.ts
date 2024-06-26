import { Route } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { WeatherComponent } from './pages/main/weather/components/weather.component';

export const routes: Route[] = [
  { path: '', component: MainComponent, title: 'hi' },
  { path: 'weather', component: WeatherComponent, title: 'hi | weather today' },
];
