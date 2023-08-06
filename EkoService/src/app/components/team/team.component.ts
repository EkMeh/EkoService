import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit{
  @ViewChild('progressBar', { static: true }) progressBar!: ElementRef;

  progressBars = [
    { percent: 75 },
    { percent: 65 },
    { percent: 85 },
    { percent: 65 },
    { percent: 70 },
    { percent: 88 },
  ];

  progressBarsTitle = [
    { title: 'Tire and Wheel Services' },
    { title: 'Lube, Oil and Filters' },
    { title: 'Belts and Hoses' },
    { title: 'Brake Repair' },
    { title: 'Air Conditioning' },
    { title: 'Engine Diagnostics' },
  ];

  ngOnInit(): void {
    const bar = this.progressBar.nativeElement;
    const width = bar.style.width;
    bar.style.width = '0';
    this.animateProgressBar(bar, parseFloat(width));
  }

  animateProgressBar(bar: HTMLElement, targetWidth: number) {
    let currentWidth = 0;
    const animationInterval = setInterval(() => {
      if (currentWidth >= targetWidth) {
        clearInterval(animationInterval);
      } else {
        currentWidth += 1;
        bar.style.width = `${currentWidth}%`;
      }
    }, 30); // Променете този интервал, за да контролирате скоростта на анимацията
  }
}
