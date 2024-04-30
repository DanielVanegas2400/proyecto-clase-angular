import { Component, OnInit } from '@angular/core';
import { PersonaInterface } from '../../core/interface/persona.interface';
import { TablaComponent } from '../../components/tabla/tabla.component';

@Component({
  selector: 'app-persona',
  standalone: true,
  templateUrl: './persona.component.html',
  styleUrl: './persona.component.css',
  imports: [TablaComponent],
})
export class PersonaComponent implements OnInit {
  personas: PersonaInterface[] = [];
  tituloTabla: string = 'Lista de Personas';
  columnas: string[] = [
    'nombre',
    'fechaNacimiento',
    'tipoDocumento',
    'numeroDocumento',
    'numeroCelular',
    'email',
    'peso',
  ];
  ngOnInit(): void {
    this.personas = [
      {
        nombre: 'Sergio',
        fechaNacimiento: new Date('2023-04-05'),
        tipoDocumento: 'Cedula de ciudadania',
        numeroDocumento: '1010',
        numeroCelular: 2102569874,
        email: 'correo1@direccion.com',
        peso: '70kg',
      },
      {
        nombre: 'Maria',
        fechaNacimiento: new Date('2001-02-04'),
        tipoDocumento: 'Cedula de ciudadania',
        numeroDocumento: '4152',
        numeroCelular: 3158962657,
        email: 'correo2@direccion.com',
        peso: '85kg',
      },
      {
        nombre: 'Santiago',
        fechaNacimiento: new Date('2002'),
        tipoDocumento: 'Cedula de ciudadania',
        numeroDocumento: '2596',
        numeroCelular: 3695268715,
        email: 'correo3@direccion.com',
        peso: '',
      },
      {
        nombre: 'Fabio',
        fechaNacimiento: new Date('1998-05-26'),
        tipoDocumento: 'Cedula de ciudadania',
        numeroDocumento: '8595',
        numeroCelular: 3259874565,
        email: 'correo4@direccion.com',
        peso: '85kg',
      },
    ];
    console.log(this.personas);
  }
  // personas: string[] = ['juan', 'pedro', 'maria'];
}
