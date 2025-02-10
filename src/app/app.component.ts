import { Component, OnInit } from '@angular/core';
import { NavService } from './services/nav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'website';
  activeNav: boolean = false;
  showModal: boolean = true; // Controla la visibilidad del modal

  constructor(private navService: NavService) {}

  ngOnInit(): void {
    this.navService.getNavbar().subscribe((data) => {
      this.activeNav = data;
    });
  }

  setNav(): void {
    this.navService.setNavbar(false);
  }

  // Abre el modal (por ejemplo, podrías llamarlo desde algún botón)
  openModal(): void {
    this.showModal = true;
  }

  // Cierra el modal (se invoca desde el modal)
  closeModal(): void {
    this.showModal = false;
  }
}
