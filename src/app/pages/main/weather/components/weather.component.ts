import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  signal,
} from '@angular/core';
import { MatButton } from '@angular/material/button';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle,
} from '@angular/material/card';
import { WeatherService } from '../services/weather.service';
import { AsyncPipe, DatePipe, NgForOf, NgIf } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { finalize } from 'rxjs';
import { Weather } from '../models/weather.interface';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatOption, MatSelect } from '@angular/material/select';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [
    MatButton,
    MatCard,
    MatCardActions,
    MatCardContent,
    MatCardHeader,
    MatCardSubtitle,
    MatCardTitle,
    NgForOf,
    AsyncPipe,
    NgIf,
    MatProgressSpinner,
    DatePipe,
    MatFormField,
    MatSelect,
    MatOption,
    MatLabel,
  ],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeatherComponent {
  capitals: string[] = ['Kyiv', 'London', 'Berlin', 'Madrid'];

  constructor(
    private readonly weatherService: WeatherService,
    private readonly destroy: DestroyRef,
  ) {}

  public readonly isLoading = signal(false);
  public readonly weather = signal<Weather | null>(null);

  getWeather(city: string): void {
    this.isLoading.set(true);
    this.weatherService
      .getWeather(city)
      .pipe(
        takeUntilDestroyed(this.destroy),
        finalize(() => this.isLoading.set(false)),
      )
      .subscribe((weather) => {
        this.weather.set(weather);
        this.isLoading.set(false);
      });
  }
}
