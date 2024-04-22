import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environmet';

@Injectable({
  providedIn: 'root'
})
export class FormulariosService {
  private apiUrl: string = environment.apiURL;

  constructor(private http: HttpClient) { }

  /* Solicitudes de Cotización */
  createSolicitudes(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/cotizaciones`, data);
  }

}
