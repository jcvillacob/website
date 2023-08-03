import { AfterViewInit, Component } from '@angular/core';

// Declaramos Swiper como una variable global
declare var Swiper: any;

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements AfterViewInit {
  logos: any[] = [
    { name: '', logo: 'assets/clientes/stepan.jpg' },
    { name: '', logo: 'assets/clientes/stepan.jpg' },
    { name: '', logo: 'assets/clientes/stepan.jpg' },
    { name: '', logo: 'assets/clientes/stepan.jpg' },
    { name: '', logo: 'assets/clientes/stepan.jpg' },
    { name: '', logo: 'assets/clientes/stepan.jpg' },
    { name: '', logo: 'assets/clientes/stepan.jpg' },
    { name: '', logo: 'assets/clientes/stepan.jpg' },
    { name: '', logo: 'assets/clientes/stepan.jpg' },
    { name: '', logo: 'assets/clientes/stepan.jpg' },
    { name: '', logo: 'assets/clientes/stepan.jpg' },
    { name: '', logo: 'assets/clientes/stepan.jpg' },
    { name: '', logo: 'assets/clientes/stepan.jpg' },
  ];

  ngAfterViewInit() {
    /* PRIMER SWIPPER */
    new Swiper(".mySwiper", {
      slidesPerView: 4,
      grid: {
        rows: 2,
      },
      spaceBetween: 30,
      freeMode: true,
      grabCursor: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      // Responsive breakpoints
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 2,
          spaceBetween: 20,
          grid: {
            rows: 1,
          }
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 3,
          spaceBetween: 30,
          grid: {
            rows: 2,
          }
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 4,
          spaceBetween: 30,
          grid: {
            rows: 2,
          }
        }
      }
    });
  }

}
