import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavService } from 'src/app/services/nav.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  init: boolean = false;
  active: boolean = false;

  constructor(private navService: NavService, private router: Router) {
  }

  ngOnInit(): void {
    this.navService.getNavbar().subscribe(data => {
      this.active = data;
    })
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.init = true;
    }, 400);
  }

  activarMenu(value: boolean) {
    this.active = value;
    this.navService.setNavbar(value);
  }
  
  routerL(route: string) {
    this.router.navigate([route]);
    this.navService.setNavbar(false);
  }

}
