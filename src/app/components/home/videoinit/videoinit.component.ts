import { Component, ElementRef, ViewChild, AfterViewInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-videoinit',
  templateUrl: './videoinit.component.html',
  styleUrls: ['./videoinit.component.css']
})
export class VideoinitComponent implements AfterViewInit {
  
  @ViewChild('videoElement') videoElement!: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.renderer.setProperty(this.videoElement.nativeElement, 'muted', true);
    this.renderer.listen(this.videoElement.nativeElement, 'loadedmetadata', () => {
      this.videoElement.nativeElement.play();
    });
  }
}
