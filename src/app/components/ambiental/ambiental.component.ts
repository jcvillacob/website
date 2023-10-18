import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import anime from 'animejs';

@Component({
  selector: 'app-ambiental',
  templateUrl: './ambiental.component.html',
  styleUrls: ['./ambiental.component.css']
})
export class AmbientalComponent implements AfterViewInit {
  @ViewChild('llanta') gota!: ElementRef;
  move: boolean = false;
  variablePrueba: any = {
    prop1: 0
  };

  constructor() { }

  ngAfterViewInit() {
    new anime({
      targets: this.gota.nativeElement,
      rotate: '3turn',
      easing: 'easeInOutSine',
      duration: 1500,
      direction: 'normal',
      delay: 4000
    });
  

    new anime({
      targets: this.gota.nativeElement.querySelectorAll('.cls-1, .cls-2, .cls-3, .cls-4'),
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 700,
      loop: false,
      direction: 'normal',
      delay: (el: any, i: any) => i * 240 
    });
  }

}
