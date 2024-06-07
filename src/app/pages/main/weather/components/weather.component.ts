import { Component, DestroyRef, signal } from '@angular/core';
import { MatButton } from '@angular/material/button';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardImage,
  MatCardSubtitle,
  MatCardTitle,
} from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { WeatherService } from '../services/weather.service';
import { AsyncPipe, DatePipe, NgForOf, NgIf } from '@angular/common';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { finalize } from 'rxjs';
import { Weather } from '../models/weather.interface';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatOption, MatSelect } from '@angular/material/select';
import {MatDivider} from "@angular/material/divider";

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
    RouterLink,
    NgForOf,
    AsyncPipe,
    NgIf,
    MatMenu,
    MatMenuTrigger,
    MatMenuItem,
    MatProgressSpinner,
    DatePipe,
    MatCardImage,
    MatFormField,
    MatSelect,
    MatOption,
    MatLabel,
    MatDivider,
  ],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss',
})
export class WeatherComponent {
  capitals: string[] = ['Kyiv', 'London', 'Berlin', 'Madrid'];

  constructor(
    private weatherService: WeatherService,
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
