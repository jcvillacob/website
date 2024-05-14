import { Component, OnInit } from '@angular/core';
import { FormulariosService } from 'src/app/services/formularios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pqrs',
  templateUrl: './pqrs.component.html',
  styleUrls: ['./pqrs.component.css'],
})
export class PqrsComponent implements OnInit {
  archivoSeleccionado: File | null = null;
  uploadedFiles: File[] = [];
  descripciones: any = {
    Peticion: 'Una petición es una solicitud formal para obtener un beneficio o servicio específico.',
    Queja: 'Una queja se presenta cuando el servicio o producto no cumple con las expectativas del cliente.',
    Reclamo: 'Un reclamo se hace para exigir una solución debido a una inconformidad con el producto o servicio recibido.',
    Sugerencia: 'Una sugerencia es una propuesta para mejorar algún aspecto del servicio o producto ofrecido.'
  };

  /* Para crear la PQRS */
  empresa!: string;
  nit!: string;
  nombre!: string;
  email!: string;
  cargo!: string;
  telefono!: string;
  tipoPqrs!: string;
  descripcion!: string;

  constructor(private formulariosService: FormulariosService) {}

  ngOnInit(): void {
    this.tipoPqrs = 'Peticion';
  }

  onFileSelected(event: any): void {
    this.archivoSeleccionado = event.target.files[0];
    if (this.archivoSeleccionado && this.archivoSeleccionado.size > 5242880) {
      Swal.fire(
        'Archivo demasiado grande',
        'El archivo no debe exceder los 5 MB',
        'error'
      );
      this.archivoSeleccionado = null;
      event.target.value = '';
    } else {
      if (this.archivoSeleccionado) {
        this.uploadedFiles.push(this.archivoSeleccionado);
        this.archivoSeleccionado = null;
        (document.getElementById('fileUpload') as HTMLInputElement).value = '';
      }
    }
  }

  createSolicitudes() {
    if (
      !this.empresa ||
      !this.nit ||
      !this.nombre ||
      !this.email ||
      !this.cargo ||
      !this.telefono ||
      !this.tipoPqrs ||
      !this.descripcion
    ) {
      Swal.fire(
        'Debes Ingresar Todos los datos',
        `La Solicitud de ${this.tipoPqrs} No ha sido enviada.`,
        'error'
      );
      return;
    }
    const data = {
      empresa: this.empresa,
      nit: this.nit,
      nombre: this.nombre,
      email: this.email,
      cargo: this.cargo,
      telefono: this.telefono,
      tipoPqrs: this.tipoPqrs,
      descripcion: this.descripcion,
    };
    this.formulariosService.createPqrs(data).subscribe(data => {
      Swal.fire({
        title: `Solicitud de ${this.tipoPqrs} Enviada`,
        html: `Ha sido creada con el radicado N° ${data.id}. Pronto nos contactaremos contigo.`,
        icon: 'success',
        customClass: {
          popup: 'swal-wide',
          title: 'swal-title',
          htmlContainer: 'swal-text'
        }
      });
      this.empresa = '';
      this.nit = '';
      this.nombre = '';
      this.email = '';
      this.cargo = '';
      this.telefono = '';
      this.tipoPqrs = 'Peticion';
      this.descripcion = '';
    })
  }
}
