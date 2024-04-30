import { PersonaComponent } from './../persona/persona.component';
import { Component } from '@angular/core';
import { ImagenesComponent } from "../imagenes/imagenes.component";
import { Router, RouterLink } from '@angular/router';

@Component({
    selector: 'app-inicio',
    standalone: true,
    templateUrl: './inicio.component.html',
    styleUrl: './inicio.component.css',
    imports: [ImagenesComponent, RouterLink, PersonaComponent]
})
export class InicioComponent {


  mostrarTitulo: boolean = true

  personas = [
    {
      nombre : 'Alejandro',
      edad : 15,
      ciudad : 'Bogota',
      documento: 1045
    },
    {
      nombre : 'Jairo',
      edad : 25,
      ciudad : 'Lima',
      documento: 1852

    },
    {
      nombre : 'Sergio',
      edad : 95,
      ciudad : 'Pereira',
      documento: 9585
    },
    {
      nombre : 'Alejandro',
      edad : 15,
      ciudad : 'Bogota',
      documento: 1045
    },
    {
      nombre : 'Jairo',
      edad : 25,
      ciudad : 'Lima',
      documento: 1852

    },
    {
      nombre : 'Sergio',
      edad : 95,
      ciudad : 'Pereira',
      documento: 9585
    },
    {
      nombre : 'Alejandro',
      edad : 15,
      ciudad : 'Bogota',
      documento: 1045
    },
    {
      nombre : 'Jairo',
      edad : 25,
      ciudad : 'Lima',
      documento: 1852

    },
    {
      nombre : 'Sergio',
      edad : 95,
      ciudad : 'Pereira',
      documento: 9585
    }
  ]


  constructor(private router: Router){}
  cambioRuta(){
    this.router.navigateByUrl('/Persona');
  }

}
