import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  newImg: boolean = false;
  selected: number = 0;
  itemSelected: any = {};
  items: any[] = [
    { category: 'Nuevos Libros', title: '', description: '', img: 'assets/carousel/1.png' },
    { category: 'Deportes', title: '', description: '', img: 'assets/carousel/2.png' },
    { category: 'Talleres', title: '', description: '', img: 'assets/carousel/3.png' },
    { category: 'Eventos Especiales', title: '', description: '', img: 'assets/carousel/4.png' },
  ];
  vhs: any[] = [
    { name: "Tractomula", ejes: 6, pesoMaximo: "34.000", galonesMax: "10.800", img: 'assets/vhs/tractomula.png' },
    { name: "Doble Troque", ejes: 3, pesoMaximo: "18.000", galonesMax: "5.500", img: 'assets/vhs/tractomula.png' },
    { name: "Sencillo", ejes: 2, pesoMaximo: "10.000", galonesMax: "3.400", img: 'assets/vhs/tractomula.png' }
  ];
  ind: number = 1;
  currentSection = 0;
  logos: any[] = [
    {name: '', logo: 'assets/clientes/stepan.jpg'},
    {name: '', logo: 'assets/clientes/stepan.jpg'},
    {name: '', logo: 'assets/clientes/stepan.jpg'},
    {name: '', logo: 'assets/clientes/stepan.jpg'},
    {name: '', logo: 'assets/clientes/stepan.jpg'},
    {name: '', logo: 'assets/clientes/stepan.jpg'},
    {name: '', logo: 'assets/clientes/stepan.jpg'},
    {name: '', logo: 'assets/clientes/stepan.jpg'},
    {name: '', logo: 'assets/clientes/stepan.jpg'},
  ];

  @HostListener('window:wheel', ['$event'])
  onWindowScroll(event: any) {
    if (event.deltaY > 0) {
      // Scrolling down
      this.goToSection(this.currentSection + 1);
    } else {
      // Scrolling up
      this.goToSection(this.currentSection - 1);
    }
  }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.itemSelected = this.items[0];
      this.newImg = true;
    }, 100);
  }

  scrollDown() {
    window.scrollBy(0, 100);
  }

  goToSection(section: number) {
    this.currentSection = section;

    const sections = document.querySelectorAll('.container__section');
    if (section >= 0 && section < sections.length) {
      const target = sections[section];
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }

  selectI(i: number) {
    this.selected = i;
    this.itemSelected = this.items[i];
    this.newImg = false;
    setTimeout(() => {
      this.newImg = true;
    }, 300);
  }

  vhIzq(): void {
    if (this.ind > 0) {
      this.ind--;
    }
  }

  vhDer(): void {
    if (this.ind < 2) {
      this.ind++;
    }
  }

  imgPosition(i: number) {
    this.ind = i;
  }
}
