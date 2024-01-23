import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AnnuaireService } from '../annuaire.service';

@Component({
  selector: 'app-ajout-personne',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ajout-personne.component.html',
  styleUrl: './ajout-personne.component.css'
})


export class AjoutPersonneComponent {
  as : AnnuaireService
  
  constructor(private annuaireService : AnnuaireService) {
    this.as = annuaireService;
  }

ajouterPersonne(formData: NgForm) {
/* throw new Error('Method not implemented.'); */
// console.log(formData.value);
  this.as.ajouterPersonne(formData.value);
}

}
