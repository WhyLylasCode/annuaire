import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UpperCasePipe } from '@angular/common';
import { DatePipe } from '@angular/common'
import { AproposComponent } from "./apropos/apropos.component";
import { WelcomeComponent } from "./welcome/welcome.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, UpperCasePipe, DatePipe, AproposComponent, WelcomeComponent, RouterLink]
})

export class AppComponent {
  title = 'annuaire';
  oeuvre = {
    titre : 'Star Wars',
    duree : 240,
    dateSortie : new Date()
  }
}
