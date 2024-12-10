import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, ViewChild, HostListener, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-image-comparison',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-comparison.component.html',
  styleUrls: ['./image-comparison.component.css']
})
export class ImageComparisonComponent implements OnInit, OnDestroy {
  @Input() image1!: string; 
  @Input() image2!: string;

  sliderPosition = 50;
  clipPathStyle = `inset(0 ${100 - this.sliderPosition}% 0 0)`;
  isMobileView = false;
  isAnimationActive = false;
  intervalId: any;

  @ViewChild('container') container!: ElementRef;

  ngOnInit(): void {
    this.checkScreenSize();
  }

  ngOnDestroy(): void {
    this.stopAnimation();
  }

  @HostListener('window:resize')
  onResize() {
    this.checkScreenSize();
  }

  checkScreenSize(): void {
    this.isMobileView = window.innerWidth < 799;
    if (!this.isMobileView) {
      this.stopAnimation();
    }
  }

  startAutoAnimation(): void {
    let direction = 1;
    let iterationCount = 0;
    
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  
    this.intervalId = setInterval(() => {
      this.sliderPosition += direction;
      
      if (this.sliderPosition >= 100 || this.sliderPosition <= 0) {
        direction *= -1;
        iterationCount++;
      }
  
      if (iterationCount >= 2) { 
        clearInterval(this.intervalId);
        this.intervalId = null;
      }
  
      this.clipPathStyle = `inset(0 ${100 - this.sliderPosition}% 0 0)`;
    }, 50);
  }

  stopAnimation(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
      this.isAnimationActive = false;
    }
  }

  onMouseClick(): void {
    if (this.isMobileView) {
      if (this.isAnimationActive) {
        this.stopAnimation();
      } else {
        this.startAutoAnimation();
      }
    }
  }

  onMouseMove(event: MouseEvent): void {
    if (this.isMobileView || this.isAnimationActive) return;

    const containerWidth = this.container.nativeElement.offsetWidth;
    const offsetX = event.clientX - this.container.nativeElement.getBoundingClientRect().left;

    this.sliderPosition = (offsetX / containerWidth) * 100;
    this.clipPathStyle = `inset(0 ${100 - this.sliderPosition}% 0 0)`;
  }
}
