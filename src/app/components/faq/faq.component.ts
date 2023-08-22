import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {
  faqs: any[] = [
    { shown: false, question: '¿Qué tipos de vehículos manejan?', answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor recusandae enim harum aliquid doloremque. Sed obcaecati quidem impedit nesciunt deserunt adipisci? Assumenda sit omnis voluptatibus nisi obcaecati quod itaque.' },
    { shown: false, question: '¿Qué tipos de vehículos manejan?', answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor recusandae enim harum aliquid doloremque. Sed obcaecati quidem impedit nesciunt deserunt adipisci? Assumenda sit omnis voluptatibus nisi obcaecati quod itaque.' },
    { shown: false, question: '¿Qué tipos de vehículos manejan?', answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor recusandae enim harum aliquid doloremque. Sed obcaecati quidem impedit nesciunt deserunt adipisci? Assumenda sit omnis voluptatibus nisi obcaecati quod itaque.' },
    { shown: false, question: '¿Qué tipos de vehículos manejan?', answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor recusandae enim harum aliquid doloremque. Sed obcaecati quidem impedit nesciunt deserunt adipisci? Assumenda sit omnis voluptatibus nisi obcaecati quod itaque.' },
    { shown: false, question: '¿Qué tipos de vehículos manejan?', answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor recusandae enim harum aliquid doloremque. Sed obcaecati quidem impedit nesciunt deserunt adipisci? Assumenda sit omnis voluptatibus nisi obcaecati quod itaque.' },
    { shown: false, question: '¿Qué tipos de vehículos manejan?', answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor recusandae enim harum aliquid doloremque. Sed obcaecati quidem impedit nesciunt deserunt adipisci? Assumenda sit omnis voluptatibus nisi obcaecati quod itaque.' },
    { shown: false, question: '¿Qué tipos de vehículos manejan?', answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor recusandae enim harum aliquid doloremque. Sed obcaecati quidem impedit nesciunt deserunt adipisci? Assumenda sit omnis voluptatibus nisi obcaecati quod itaque.' },
    { shown: false, question: '¿Qué tipos de vehículos manejan?', answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor recusandae enim harum aliquid doloremque. Sed obcaecati quidem impedit nesciunt deserunt adipisci? Assumenda sit omnis voluptatibus nisi obcaecati quod itaque.' },
  ];

  showAnswer(i: number) {
    this.faqs[i].shown = !this.faqs[i].shown
  }

}
