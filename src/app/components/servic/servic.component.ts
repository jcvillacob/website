import { Component } from '@angular/core';

@Component({
  selector: 'app-servic',
  templateUrl: './servic.component.html',
  styleUrls: ['./servic.component.css']
})
export class ServicComponent {
  public counters: { [key: string]: number } = {};

  servicios: any[] = [
    { name: 'Transporte de carga Líquida y granel.', desc: 'Durante más de 30 años nos hemos especializado en el transporte de carga por carretera a nivel nacional e internacional. Nuestro propósito es brindar a nuestros clientes soluciones logísticas, eficaces y seguras que permitan el crecimiento y el desarrollo económico y social de nuestro país.', img: '../../../../assets/servicios/mula.png' },
    { name: 'Administracón de Flota.', desc: 'Desde el momento en que los vehículos son incorporados a la compañía, se inicia un proceso de administración completa. Contamos con sistemas de monitoreo en tiempo real, que permite un control riguroso sobre el estado de los productos, garantizando seguridad, sostenibilidad y puntualidad.', img: '../../../../assets/servicios/dosMulas.png' },
    { name: 'Alquiler de Tanques y Vehículos.', desc: 'ofrecemos a nuestros clientes flexibilidad y recursos necesarios para llevar a cabo el transporte de líquidos de manera eficiente y segura, Proporcionando unidades de transporte adaptadas para diferentes tipos de carga líquida. Nuestro servicio de alquiler asegura una gestión logística, con opciones personalizadas según las necesidades de cada cliente.', img: '../../../../assets/servicios/gases.png' },
    { name: 'Transporte de gases Criogénicos y GLP.', desc: 'Nuestro servicio de transporte especializado garantiza la entrega segura y eficiente de gases criogénicos y GLP, cumpliendo con los más altos estándares de seguridad y calidad en el servicio.', img: '../../../../assets/servicios/dosMulas.png' },
    { name: 'Soluciones Logísticas.', desc: 'Nuestro servicio de Solución Logística cuenta con el diseño, la creación, planificación y gestión integral de operaciones de transporte altamente especializadas. Incluye la selección meticulosa de rutas y destinos, la contratación y capacitación de nuestros conductores altamente cualificados, así como la gestión eficiente de nuestra flota.', img: '../../../../assets/servicios/dosMulas.png' },
  ];
  vehiculos: any[] = [
    { name: 'Tractomula', ejes: '6', peso: '34.000', vol: '10.800', img: '../../../../assets/vhs/tm.jpg' },
    { name: 'Dobletroque', ejes: '3', peso: '18.000', vol: '5.500', img: '../../../../assets/vhs/tm.jpg' },
    { name: 'Sencillo', ejes: '2', peso: '10.000', vol: '3.400', img: '../../../../assets/vhs/tm.jpg' },
  ];


  constructor() { }

  public onIntersection({ target, visible }: { target: Element; visible: boolean }, title: string, targetValue: number): void {
    if (visible && !this.counters[title]) {
      this.startCountUp(title, targetValue);
    }
  }

  private startCountUp(title: string, targetValue: number) {
    let current = 0;
    const step = Math.round(targetValue / 75);
    const interval = setInterval(() => {
      current += step;
      if (current >= targetValue) {
        current = targetValue;
        clearInterval(interval);
      }
      this.counters[title] = current;
    }, 20);
  }


}
