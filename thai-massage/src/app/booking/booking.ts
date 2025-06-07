
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInput } from "@angular/material/input";
import { MatFormField } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';



@Component({
  selector: 'app-booking',
  imports: [MatInput
    ,MatFormField,MatSelectModule,MatNativeDateModule
    ,MatDatepickerModule,ReactiveFormsModule
  ],
  templateUrl: './booking.html',
  styleUrl: './booking.scss'
})
export class Booking {
   bookingForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.bookingForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      date: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.bookingForm.valid) {
      console.log('Buchung erfolgreich:', this.bookingForm.value);
    }
  }

}
