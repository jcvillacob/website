import { Component, OnInit } from '@angular/core';
import { FormulariosService } from 'src/app/services/formularios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pqrs',
  templateUrl: './pqrs.component.html',
  styleUrls: ['./pqrs.component.css']
})
export class PqrsComponent implements OnInit {

  /* Para crear la solicitud */
  empresa!: string;
  nit!: string;
  nombre!: string;
  email!: string;
  origen!: string;
  direccionOrigen!: string;
  destino!: string;
  direccionDestino!: string;
  tipoVh!: string;
  producto!: string;
  observaciones!: string;

  constructor(private formulariosService: FormulariosService) {

  }


  ngOnInit(): void {
      this.tipoVh = 'TM';
  }

  createSolicitudes() {
    if (!this.empresa || !this.nit || !this.nombre || !this.email || !this.origen || !this.direccionOrigen || !this.destino || !this.direccionDestino || !this.tipoVh || !this.producto || !this.observaciones) {
      Swal.fire(
        'Debes Ingresar Todos los datos',
        `La cotización No ha sido enviada.`,
        'error'
      )
      return
    };
    const data = {
      empresa: this.empresa,
      nit: this.nit,
      nombre: this.nombre,
      email: this.email,
      origen: this.origen,
      direccionOrigen: this.direccionOrigen,
      destino: this.destino,
      direccionDestino: this.direccionDestino,
      tipoVh: this.tipoVh,
      producto: this.producto,
      observacion: this.observaciones
    };

    this.formulariosService.createSolicitudes(data).subscribe(data => {
      this.empresa = '';
      this.nit = '';
      this.nombre = '';
      this.email = '';
      this.origen = '';
      this.direccionOrigen = '';
      this.destino = '';
      this.direccionDestino = '';
      this.tipoVh = '';
      this.producto = '';
      this.observaciones = '';
      Swal.fire(
        'Cotización Enviada',
        `Pronto nos contactaremos contigo.`,
        'success'
      );
    });
  }

}
