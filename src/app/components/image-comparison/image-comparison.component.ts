import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-image-comparison',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './image-comparison.component.html',
  styleUrls: ['./image-comparison.component.css']
})
export class ImageComparisonComponent {
  @Input() image1!: string; 
  @Input() image2!: string;
  sliderPosition = 50;
  clipPathStyle = `inset(0 ${100 - this.sliderPosition}% 0 0)`;

  @ViewChild('container') container!: ElementRef;

  onMouseMove(event: MouseEvent): void {
    const containerWidth = this.container.nativeElement.offsetWidth;
    const offsetX = event.clientX - this.container.nativeElement.getBoundingClientRect().left;

    this.sliderPosition = (offsetX / containerWidth) * 100;
    this.clipPathStyle = `inset(0 ${100 - this.sliderPosition}% 0 0)`;
  }
}
