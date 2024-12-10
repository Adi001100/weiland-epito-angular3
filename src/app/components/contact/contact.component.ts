import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

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
    tel: '',
    message: ''
  };

  isSubmitted = false;
  responseMessage = '';
  fadeOut = false;

  constructor(private readonly http: HttpClient) { }

  responseStatus: 'success' | 'error' | '' = ''; // Új változó a státuszhoz

onSubmit() {
  const apiUrl = 'http://localhost/php-mailer/EmailSender.php';
  this.isSubmitted = true;

  this.http.post(apiUrl, this.contactForm).subscribe(
    (response: any) => {
      this.responseStatus = 'success';
      this.responseMessage = 'Köszönjük üzenetét! Hamarosan felvesszük Önnel a kapcsolatot.';

      setTimeout(() => {
        this.fadeOut = true;
      }, 3000);

      setTimeout(() => {
        this.resetForm();
      }, 4000);
    },
    (error) => {
      this.responseStatus = 'error'; // Hiba státusz
      this.responseMessage = error.error?.message || 'Hiba történt az üzenet küldésekor.';

      setTimeout(() => {
        this.fadeOut = true;
      }, 3000);

      setTimeout(() => {
        this.resetForm();
      }, 4000);
    }
  );
}

resetForm() {
  this.isSubmitted = false;
  this.responseMessage = '';
  this.responseStatus = ''; // Alaphelyzetbe állítás
  this.fadeOut = false;
  this.contactForm = { name: '', email: '', tel: '', message: '' };
}
}
