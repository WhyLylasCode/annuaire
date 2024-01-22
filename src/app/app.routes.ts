import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AproposComponent } from './apropos/apropos.component';

export const routes: Routes = [
    {path: '', component: WelcomeComponent},
    {path: 'apropos', component: AproposComponent}];
