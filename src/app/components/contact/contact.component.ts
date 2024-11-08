// src/app/contact.component.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm = {
    name: '',
    email: '',
    message: ''
  };
  
  isSubmitted = false;

  onSubmit() {
    this.isSubmitted = true;
    // Üzenet elküldés logika
    console.log('Elküldött űrlap adatok:', this.contactForm);
  }
}
