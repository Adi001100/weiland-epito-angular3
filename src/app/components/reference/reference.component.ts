import { Component } from '@angular/core';
import { ImageComparisonComponent } from '../image-comparison/image-comparison.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reference',
  standalone: true,
  imports:[ImageComparisonComponent, CommonModule],
  templateUrl: './reference.component.html',
  styleUrl: './reference.component.css'
})
export class ReferenceComponent {
}

