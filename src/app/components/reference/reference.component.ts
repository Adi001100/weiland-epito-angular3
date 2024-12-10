import { Component } from '@angular/core';
import { ImageComparisonComponent } from '../image-comparison/image-comparison.component';
import { CommonModule } from '@angular/common';
import { InstagramComponent } from '../instagram/instagram.component';

@Component({
  selector: 'app-reference',
  standalone: true,
  imports:[ImageComparisonComponent, CommonModule, InstagramComponent],
  templateUrl: './reference.component.html',
  styleUrl: './reference.component.css'
})
export class ReferenceComponent {
}

