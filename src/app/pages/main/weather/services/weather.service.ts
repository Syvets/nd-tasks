import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { WeatherRequest } from '../models/weather-request.interface';
import { Weather } from '../models/weather.interface';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private readonly apiUrl =
    'http://api.weatherapi.com/v1/current.json?key=0c5f0241fe5347db92b113221240506&q=';

  constructor(private readonly http: HttpClient) {}

  getWeather(city: string): Observable<Weather> {
    return this.http.get<WeatherRequest>(`${this.apiUrl}${city}/posts`).pipe(
      map((request) => request.current),
      catchError((error) => {
        console.error('Error fetching data:', error);
        return throwError(() => new Error('Something went wrong'));
      }),
    );
  }
}
