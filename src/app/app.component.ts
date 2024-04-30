import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { HeaderComponent } from './shared/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, InicioComponent, HeaderComponent],
})
export class AppComponent {
  title = 'proyecto-clase';

  nombre: string = 'Daniel Vanegas';
  edad: number = 18;
}
