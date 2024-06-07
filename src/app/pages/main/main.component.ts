import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import {InfoPipe} from "./pipes/info.pipe";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, RouterLink, InfoPipe],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {}
