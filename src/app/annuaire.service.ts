import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnnuaireService {

  annuaire : any[] = [];

  constructor() {  }

  ajouterPersonne(p : any){
    this.annuaire.push(p);
    
  }
}
