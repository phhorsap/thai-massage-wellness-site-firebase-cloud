import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Booking } from './booking/booking';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Booking,RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'thai-massage';
}
