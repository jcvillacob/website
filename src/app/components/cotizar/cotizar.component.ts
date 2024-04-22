import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cotizar',
  templateUrl: './cotizar.component.html',
  styleUrls: ['./cotizar.component.css']
})
export class CotizarComponent implements OnInit {
  tipoVh!: string;

  ngOnInit(): void {
      this.tipoVh = 'TM';
  }

  sendForm() {
    
  }

}
