import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  images: string[] = [
    'https://via.placeholder.com/1080x1350?text=Image+1', // Instagram álló kép
    'https://via.placeholder.com/1080x1350?text=Image+2', // Instagram álló kép
    'https://via.placeholder.com/1080x1350?text=Image+3', // Instagram álló kép
    'https://via.placeholder.com/1080x1350?text=Image+4', // Instagram álló kép
    'https://via.placeholder.com/1080x1350?text=Image+5', // Instagram álló kép
    'https://via.placeholder.com/1080x1350?text=Image+6', // Instagram álló kép
    'https://via.placeholder.com/1080x1350?text=Image+7', // Instagram álló kép
    'https://via.placeholder.com/1080x1350?text=Image+8', // Instagram álló kép
    'https://via.placeholder.com/1080x1350?text=Image+9', // Instagram álló kép
    'https://via.placeholder.com/1080x1350?text=Image+10' // Instagram álló kép
  ];

  constructor() { }

  ngOnInit(): void { }
}
