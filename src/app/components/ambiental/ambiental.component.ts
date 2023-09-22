import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import anime from 'animejs';

@Component({
  selector: 'app-ambiental',
  templateUrl: './ambiental.component.html',
  styleUrls: ['./ambiental.component.css']
})
export class AmbientalComponent implements AfterViewInit {
  @ViewChildren('demoRef') demoElements!: QueryList<ElementRef>;
  move: boolean = false;
  variablePrueba: any = {
    prop1: 0
  };

  constructor() { }

  ngAfterViewInit() {
  }

  clickBox() {
    let translate: number, border: string[];
    if (this.move) {
      translate = 0;
      border = ['50%', '0%']
    } else {
      translate = 250;
      border = ['0%', '50%']
    }
    this.move = !this.move;
    this.demoElements.toArray().forEach((element, index) => {
      if (!element) {
        console.error('demoElement no está definido');
        console.log(element);
        return;
      }
  
      /* const svgPath = document.querySelectorAll('.css-selector-demo'); */
      new anime({
        targets: element.nativeElement,
        translateX: translate,
        translateY: 65*index,
        duration: 1000,
        backgroundColor: '#FFF',
        borderRadius: border,
        easing: 'linear',
        delay: 1000*index,
      });
  });


    new anime({
      targets: this.variablePrueba,
      prop1: 500,
      round: 1,
      duration: 1900,
      easing: 'linear',
    });
  }
}
