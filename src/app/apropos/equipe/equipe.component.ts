import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-equipe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './equipe.component.html',
  styleUrl: './equipe.component.css'
})

export class EquipeComponent {
  pVisible = false;
  afficherMessage() {
    this.pVisible = !this.pVisible;
  }
  
}
