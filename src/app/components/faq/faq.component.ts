import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {
  faqs: any[] = [
    {
      shown: false, question: '¿Si soy generador de carga, distribuidor o comercializador y necesito realizar una cotización con Coorditanques para movilizar mi mercancía, a qué contacto puedo dirigirme y que información debo suministrar?', answer: [
        'Para gestionar una cotización por favor enviar el requerimiento al siguiente correo: solicitudes@coorditanques.com o puedes generar la solicitud directamente por nuestra pagina web www.coorditanques.com.',
      ]
    },
    {
      shown: false, question: '¿Si la cotización ha sido aprobada, cuál sería el paso a seguir para transportar mis productos con Coordinadora de Tanques?', answer: [
        'La confirmación de la aprobación será recibida por correo electrónico.',
        'El área de satisfacción del cliente se comunicará con usted, para que nos proporcione información de la compañía que está contratando el servicio de transporte, diligenciando los formatos establecidos y adjuntando todos los documentos solicitados para el ingreso como clientes. Esta información será entregada al correo de satisfacción del cliente: servicioalcliente@coorditanques.com',
      ]
    },
    {
      shown: false, question: '¿Cómo puedo solicitar un servicio de transporte de carga líquida?', answer: [
        'Si su compañía es cliente nuevo, debes solicitar la cotización al correo solicitudes@coorditanques.com o en el sitio web de la compañía, revisión y aprobación de la cotización, posteriormente envío de los documentos exigidos para tal efecto.',
        'Si su compañía es cliente actual de Coorditanques, enviar la solicitud al correo de solicitudes@coorditanques.com con toda la información requerida para el cargue, movilización y entrega de la mercancía.',
      ]
    },
    {
      shown: false, question: '¿Dónde puedo interponer una PQRS?', answer: [
        'Dependiendo del tipo de petición, queja, reclamo y/o sugerencia la empresa nombra un responsable para el tratamiento de cada una:',
        'Cliente Area ----> satisfacción del cliente ----> servicioalcliente@coorditanques.com',
        'Comunidad ----> SST-A ----> ygomez@coorditanques.com',
        'Flota Fidelizados ----> Area de terceros ----> analistaterceros@coorditanques.com',
        'Proveedores ----> Compras ----> compras@coorditanques.com',
        'Para este proceso la empresa cuenta con tiempos establecidos para la respuesta mediante el procedimiento que se tiene.'
      ]
    },
    {
      shown: false, question: '¿Cómo puedo calificar la atención prestada después de interponer una PQRS?', answer: [
        'La calificación al servicio de gestión y seguimiento a las peticiones, quejas, reclamos y sugerencias se realiza mediante la aplicación de la encuesta (Calificación Tratamiento PQRs Coordinadora de Tanques SAS), la cual es compartida un día después del cierre a la novedad ocurrida, mediante los correos de atención: servicioalcliente@coorditanques.com',
      ]
    },
    {
      shown: false, question: '¿Cómo puedo exponer una sugerencia en cuanto a la prestación del servicio recibido?', answer: [
        'Las sugerencias en cuanto al servicio recibido se reciben por medio de la página web mediante el apartado (déjanos un mensaje), también se aceptan sugerencias en forma verbal en las líneas de atención telefónica, presencial en nuestras instalaciones o mediante correo electrónico de satisfacción del cliente servicioalcliente@coorditanques.com',
      ]
    },
    {
      shown: false, question: '¿En Coorditanques califican el servicio prestado?', answer: [
        'Si, se realiza la encuesta de satisfacción del cliente de manera trimestral y semestral y con base en los resultados se implementan las acciones de mejora.',
      ]
    },
    {
      shown: false, question: '¿Cómo es el proceso de certificación del SGI y que beneficios trae?', answer: [
        'El proceso se inicia desde que se realiza la solicitud a los entes externos apropiados para esta actividad, estas certificaciones buscan evidenciar en la compañía el cumplimiento de requisitos aplicables a la naturaleza de la empresa en este caso transporte de sustancias químicas, en donde intervienen todos los procesos estratégicos, misionales y de apoyo de la compañía.',
        'Que beneficios trae, darles la confianza a nuestros clientes de la implementación de procesos seguros en nuestra actividad.',
      ]
    },
    {
      shown: false, question: '¿Como implementa la empresa los procesos seguros en sus áreas?', answer: [
        'Dia a día se cuenta con lideres de procesos en las diferentes áreas de la empresa que trabajan en pro de garantizar el cumplimiento de actividades de las áreas, teniendo siempre presente el bienestar, integridad y salud de los trabajadores.',
      ]
    },
    {
      shown: false, question: '¿Cómo hago para revisar el estado de ubicación de mi carga?', answer: [
        'Se le asignará usuario y contraseña para revisar el estado del vehículo en tiempo real, tiene acceso a la ubicación por medio de GPS.',
      ]
    },
    {
      shown: false, question: '¿Dónde operan y cuál es su área de servicio?', answer: [
        'Prestamos el servicio de transporte de carga y nuestro campo de acción es en el territorio Nacional e internacional para Ecuador.',
      ]
    },
    {
      shown: false, question: '¿Cuáles son los plazos de entrega típicos?', answer: [
        'Se analiza las fechas de la programación entre las partes, para cada ruta se tiene establecido las políticas indispensables que garantizan la integridad y seguridad de todos los involucrados.',
      ]
    },
    {
      shown: false, question: '¿Ofrecen servicios de transporte de carga líquida urgente?', answer: [
        'Se revisa la solicitud, puesto que el transporte de carga liquida por ser productos catalogados como peligrosos y no peligrosos, primero se debe hacer un análisis y revisión interna e informar si se puede prestar el servicio de manera inmediata o se indica la mejor opción, garantizando la seguridad y el cumplimiento a los estándares y exigencias del manejo, traslado y el uso de este tipo de mercancías.',
      ]
    },
    {
      shown: false, question: '¿Qué medidas de seguridad tienen para garantizar la integridad de la carga?', answer: [
        'Este es un tema esencial y primordial bastante amplio, es por ello se toman todas las medidas necesarias para proveer nuestro servicio, apoyados de todas las disposiciones contempladas en las normas vigentes.',
      ]
    },
    {
      shown: false, question: '¿Puedo contactar directamente con la persona encargada de facturación para temas de validación, devoluciones y reclamos?', answer: [
        'Si, al correo jecheverry@coorditanques.com o al número de Whatsapp 3116057532 puedes dejar tu solicitud referente a tu factura electrónica y recibir una respuesta oportuna.',
      ]
    },
    {
      shown: false, question: '¿Dónde puedo encontrar el soporte/cumplido de la factura del servicio de transporte?', answer: [
        'En la plataforma de nuestro proveedor tecnológico Go – Socket Gosocket',
      ]
    },
    {
      shown: false, question: '¿Puedo solicitar al área de facturación, cobros de Stand By en la factura del viaje inicial, facturación de servicios en conjunto y demás?', answer: [
        'Sí, el área de facturación expedirá siempre la factura conforme a los requerimientos del cliente.',
      ]
    },
    {
      shown: false, question: '¿Cómo es el proceso de validación en caso de presentar novedades con alguna diferencia en las entregas?', answer: [
        'Se activa el protocolo establecido internamente, en el cual se revisan unos parámetros que determinan en detalle lo sucedido.',
      ]
    },
    {
      shown: false, question: '¿Qué beneficios tiene contratar un servicio con Coordinadora de Tanques?', answer: [
        'Es una empresa que cuenta con más de 30 años en el mercado, nuestro valor agregado consiste en ver la carga de nuestros clientes como si fuera la nuestra, lo cual transmite confianza, responsabilidad y crea una relación más cercana con nuestros clientes, del mismo modo, contamos con una infraestructura moderna. Aquí destacamos a nuestra área de seguridad la cual nos acompaña las 24 horas al día.',
      ]
    },
    {
      shown: false, question: '¿Cómo un proceso articulado, se traduce en beneficios tangibles para nuestros clientes?', answer: [
        'Al buscar constantemente formas de mejorar nuestros procesos, se fomenta un ambiente de innovación que puede llevar a nuevas oportunidades de crecimiento y expansión.',
        'Al identificar y corregir posibles puntos de error en los procesos, se reducen los riesgos de errores costosos y reprocesos, lo que ahorra tiempo y recursos.',
        'La eliminación de tarea redundantes o innecesarias permite a los empleados centrarse en actividades de mayor valor, lo que aumenta la productividad.',
        'La optimización de procesos conduce a una mayor conciencia y calidad en los productos y servicios entregados, lo que fortalecen la reputación de la empresa y fideliza a los clientes.'
      ]
    },
  ];

  showAnswer(i: number) {
    this.faqs[i].shown = !this.faqs[i].shown
  }

}
