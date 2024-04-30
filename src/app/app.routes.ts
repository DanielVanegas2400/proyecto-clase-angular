import { Routes } from '@angular/router';
import { PersonaComponent } from './pages/persona/persona.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ImagenesComponent } from './pages/imagenes/imagenes.component';
import { AcercaDeComponent } from './pages/acerca-de/acerca-de.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { PATH } from './core/enum/path.enum';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { ListaTareasComponent } from './pages/lista-tareas/lista-tareas.component';

export const routes: Routes = [
  {
    path: PATH.HOME,
    title: 'Home',
    children: [
      {
        path: '',
        title: 'Home',
        component: InicioComponent,
      },
      {
        path: PATH.PERSONA,
        title: 'Persona',
        component: PersonaComponent,
      },
      {
        path: PATH.USUARIO,
        title: 'Usuarios',
        component: UsuariosComponent,
      },
      {
        path: PATH.TAREAS,
        title: 'Lista tareas',
        component: ListaTareasComponent,
      },
      {
        path: PATH.PRODUCTOS,
        title: 'Productos',
        component: ProductosComponent,
      },
      {
        path: PATH.IMAGEN,
        title: 'Imagenes',
        component: ImagenesComponent,
      },
      {
        path: PATH.ACERCADE,
        title: '¿Quienes somos?',
        component: AcercaDeComponent,
      },
      {
        path: PATH.CONTACTO,
        title: 'Contacto',
        component: ContactoComponent,
      },
    ],
  },
];
