import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header-component";
import { FooterComponent } from "./footer/footer.component";
import { DirectivaComponent } from "./directiva/directiva.component";
import { CommonModule } from '@angular/common';
import { ClientesComponent } from "./clientes/clientes.component";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    standalone: true,
    imports: [RouterOutlet, CommonModule, HeaderComponent, FooterComponent, DirectivaComponent, ClientesComponent]
})
export class AppComponent {
  title = 'Bienvenido a Angular';
  curso: string = 'Spring 5 y angular';
  profesor: string = 'Andrés Guzman';
}
