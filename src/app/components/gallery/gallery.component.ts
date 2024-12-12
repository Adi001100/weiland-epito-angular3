import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../environment';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  // images: string[] = [
  //   'https://via.placeholder.com/1080x1350?text=Image+1', // Instagram álló kép
  //   'https://via.placeholder.com/1080x1350?text=Image+2', // Instagram álló kép
  //   'https://via.placeholder.com/1080x1350?text=Image+3', // Instagram álló kép
  //   'https://via.placeholder.com/1080x1350?text=Image+4', // Instagram álló kép
  //   'https://via.placeholder.com/1080x1350?text=Image+5', // Instagram álló kép
  //   'https://via.placeholder.com/1080x1350?text=Image+6', // Instagram álló kép
  //   'https://via.placeholder.com/1080x1350?text=Image+7', // Instagram álló kép
  //   'https://via.placeholder.com/1080x1350?text=Image+8', // Instagram álló kép
  //   'https://via.placeholder.com/1080x1350?text=Image+9', // Instagram álló kép
  //   'https://via.placeholder.com/1080x1350?text=Image+10' // Instagram álló kép
  // ];

  // constructor() { }

  // ngOnInit(): void { }
  images: string[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const accessToken = 'IGQWRPNmVwU1dzVERBOVVMSUt4a0FxZAGltT0lBNTRCcFNHR2ZAQdmloWDM0eDJlZAU4xSXBxcEVGdUxNNmV4REs5ZA0FjbEY1RzliQkIxU2FiNnYzSWk0bk1Tc010czEzM3JkZATVrSEhIdHgtR083VzJGWUVsaVhuSW8ZD'; // Cseréld ki a saját tokenedre
    const apiUrl = `https://graph.instagram.com/me/media?fields=id,media_url&access_token=${environment.instagramAccessToken}`;

    this.http.get(apiUrl).subscribe(
      (response: any) => {
        if (response.data) {
          this.images = response.data.map((item: any) => item.media_url);
        }
      },
      (error) => {
        console.error('Hiba történt az Instagram képek lekérésekor:', error);
      }
    );
  }
}
