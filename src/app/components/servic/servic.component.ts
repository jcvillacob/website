import { Component } from '@angular/core';

@Component({
  selector: 'app-servic',
  templateUrl: './servic.component.html',
  styleUrls: ['./servic.component.css']
})
export class ServicComponent {
  servicios: any[] = [
    {name: 'Transporte de carga Líquida y granel.', desc: 'Durante más de 30 años nos hemos especializado en el transporte de carga por carretera a nivel nacional e internacional. Nuestro propósito es brindar a nuestros clientes soluciones logísticas, eficaces y seguras que permitan el crecimiento y el desarrollo económico y social de nuestro país.', img: '../../../../assets/servicios/dosMulas.png'},
    {name: 'Administración de Flota.', desc: 'La Administración de Flota de vehículos de carga, es un enfoque integral para gestionar eficientemente nuestros procedimientos con los vehículos y recursos involucrados en el transporte de carga. Desde el momento en que los vehículos son incorporados a la compañía, se inicia un proceso de administración completa de supervisión, coordinación y control constante, además contamos con sistemas de seguimiento y monitoreo en tiempo real, lo que permite mantener un control riguroso sobre la ubicación y el estado de los productos, buscando garantizar la entrega puntual y segura, fomentando la responsabilidad ambiental y la seguridad en carretera.', img: '../../../../assets/servicios/mula.png'},
    {name: 'Alquiler de Tanques y Vehículos.', desc: 'Coorditanques presta el servicio de alquiler de tanques y cabezotes ofreciendo a nuestros clientes la flexibilidad y recursos necesarios para llevar a cabo el transporte de líquidos de manera eficiente y segura. Proporcionamos tanques especializados y vehículos adaptados para diferentes tipos de carga líquida. Nuestro servicio de alquiler asegura una gestión logística, con opciones personalizadas según las necesidades de cada cliente, lo que simplifica el proceso de transporte y contribuye al éxito de sus operaciones.', img: '../../../../assets/servicios/gases.png'},
    {name: 'Transporte de gases Criogénicos y GLP.', desc: 'Nuestro servicio de transporte especializado garantiza la entrega segura y eficiente de gases criogénicos y GLP, cumpliendo con los más altos estándares de seguridad y calidad en el servicio.', img: '../../../../assets/servicios/dosMulas.png'},
    {name: 'Soluciones Logísticas.', desc: 'Nuestro servicio de Solución Logística cuenta con el diseño, la creación, planificación y gestión integral de operaciones de transporte altamente especializadas. Incluye la selección meticulosa de rutas y destinos, la contratación y capacitación de nuestros colaboradores al volante altamente cualificados, así como la gestión eficiente de nuestra flota. Esta versión resalta la especialización y la eficiencia de los servicios de transporte, así como la atención a cada detalle para proporcionar una solución logística completa y efectiva..', img: '../../../../assets/servicios/dosMulas.png'},
  ];
  vehiculos: any[] = [
    {name: 'Tractomula', ejes: '6', peso: '34.000', vol: '10.800', img: '../../../../assets/vhs/tractomula.png'},
    {name: 'Dobletroque', ejes: '3', peso: '18.000', vol: '5.500', img: '../../../../assets/vhs/tractomula.png'},
    {name: 'Sencillo', ejes: '2', peso: '10.000', vol: '3.400', img: '../../../../assets/vhs/tractomula.png'},
  ];



}
