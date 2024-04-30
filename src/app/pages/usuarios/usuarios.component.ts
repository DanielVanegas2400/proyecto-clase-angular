import { PersonaInterface } from './../../core/interface/persona.interface';
import { Component, OnInit } from '@angular/core';
import { TablaComponent } from '../../components/tabla/tabla.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css',
  imports: [TablaComponent],
})
export class UsuariosComponent implements OnInit {
  usuarios: PersonaInterface[] = [];
  infoUsuario: any;
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
    this.usuarios = [
      {
        nombre: 'Maria',
        fechaNacimiento: new Date('2023-04-05'),
        tipoDocumento: 'pasaporte',
        numeroDocumento: 'AR25262889',
        numeroCelular: 589575978,
        email: 'email@correo.com',
        peso: '85kg',
      },
      {
        nombre: 'Pedro',
        fechaNacimiento: new Date('1958-05-29'),
        tipoDocumento: 'pasaporte',
        numeroDocumento: 'AR2558956',
        numeroCelular: 3159628759,
        email: 'email1@correo.com',
        peso: '',
      },
      {
        nombre: 'Armando',
        fechaNacimiento: new Date('2023-04-05'),
        tipoDocumento: 'pasaporte',
        numeroDocumento: 'AR96325874',
        numeroCelular: 85962548,
        email: 'email4@correo.com',
        peso: '58kg',
      },
      {
        nombre: '',
        fechaNacimiento: new Date('2023-04-05'),
        tipoDocumento: 'Cedula de ciudadania',
        numeroDocumento: '1010258596',
        numeroCelular: 589575978,
        email: 'email2@correo.com',
        peso: '89kg',
      },
      {
        nombre: 'Betty',
        fechaNacimiento: new Date('2023-04-05'),
        tipoDocumento: 'Cedula de ciudadania',
        numeroDocumento: '85965874',
        numeroCelular: 31569857485,
        email: 'email3@correo.com',
        peso: '69kg',
      },
    ];
  }

  recibirInfoUsuarios(usuario: PersonaInterface) {
    this.infoUsuario = usuario;
    console.log('Informacion usuarios', this.infoUsuario);
    Swal.fire({
      title: 'Informacion de los usuarios',
      icon: 'info',
      html: `Nombre: ${usuario.nombre}<br>
            Fecha de nacimiento: ${usuario.fechaNacimiento}<br>
            Tipo de documento: ${usuario.tipoDocumento}<br>
            Numero de documento: ${usuario.numeroDocumento}<br>
            Numero de celular: ${usuario.numeroCelular}<br>
            Email: ${usuario.email}<br>
            Peso: ${usuario.peso}<br>`,
    });
  }
}
