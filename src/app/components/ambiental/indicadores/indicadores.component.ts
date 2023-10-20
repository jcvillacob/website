import { Component } from '@angular/core';
import anime from 'animejs';

@Component({
  selector: 'app-indicadores',
  templateUrl: './indicadores.component.html',
  styleUrls: ['./indicadores.component.css']
})
export class IndicadoresComponent {
  public counters: { [key: string]: boolean } = {};

  public onIntersection({ target, visible }: { target: Element; visible: boolean }, clases: string, title: string): void {
    if (visible && !this.counters[title]) {
      new anime({
        targets: (target as HTMLElement).querySelectorAll(clases),
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 900,
        loop: false,
        direction: 'normal',
        delay: (el: any, i: any) => i * 150 
      });

      this.counters[title] = true;

    }
  }

}
