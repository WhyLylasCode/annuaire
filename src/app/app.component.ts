import { Component } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { DatePipe } from '@angular/common'
import { AproposComponent } from "./apropos/apropos.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [UpperCasePipe, DatePipe, AproposComponent, WelcomeComponent, RouterLink, RouterOutlet]
})

export class AppComponent {
  title = 'annuaire';
  oeuvre = {
    titre : 'Star Wars',
    duree : 240,
    dateSortie : new Date()
  }
}


