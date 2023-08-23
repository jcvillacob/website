import { Component, OnInit } from '@angular/core';
import { NavService } from './services/nav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'website';
  activeNav: boolean = false;

  constructor (private navService: NavService){} 

  ngOnInit(): void {
      this.navService.getNavbar().subscribe(data => {
        this.activeNav = data;
      })
  }

  setNav() {
    this.navService.setNavbar(false);
  }
}
