import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AproposComponent } from './apropos/apropos.component';
import { ContactComponent } from './contact/contact.component';
import { ListePersonneComponent } from './liste-personne/liste-personne.component';
import { AjoutPersonneComponent } from './ajout-personne/ajout-personne.component';

export const routes: Routes = [
    {path: '', component: WelcomeComponent},
    {path: 'apropos', component: AproposComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'listePersonne', component: ListePersonneComponent},
    {path: 'ajoutPersonne', component: AjoutPersonneComponent}
];
