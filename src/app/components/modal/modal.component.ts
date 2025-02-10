import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  @Output() close = new EventEmitter<void>();

  closeModal(): void {
    this.close.emit();
  }

  openWhatsApp(): void {
    window.open('https://wa.me/573107336470', '_blank');
  }
}
