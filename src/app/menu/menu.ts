import { PATH } from '../core/enum/path.enum';
import { MenuInfoInterface } from '../core/interface/menu_info.interface';

export const MenuRoutes: MenuInfoInterface[] = [
  {
    path: PATH.HOME,
    title: 'Home',
    icon: 'fa-solid fa-house',
    classCSS: 'd-flex justify-content-center align-items-center p-2',
    submenu: [],
  },

  {
    path: PATH.PERSONA,
    title: 'Persona',
    icon: 'fa-solid fa-person',
    classCSS: 'd-flex justify-content-center align-items-center p-2',
    submenu: [
      {
        path: PATH.IMAGEN,
        title: 'Imagen 2',
        icon: '',
        classCSS: '',
        submenu: [],
      },
    ],
  },
  {
    path: PATH.USUARIO,
    title: 'Usuarios',
    icon: 'fa-solid fa-user',
    classCSS: 'd-flex justify-content-center align-items-center p-2',
    submenu: [],
  },
  {
    path: PATH.PRODUCTOS,
    title: 'Mis productos',
    icon: 'fa-brands fa-product-hunt',
    classCSS: 'd-flex justify-content-center align-items-center p-2',
    submenu: [],
  },
  {
    path: PATH.TAREAS,
    title: 'Mis tareas',
    icon: 'fa-solid fa-list-check',
    classCSS: 'd-flex justify-content-center align-items-center p-2',
    submenu: [],
  },
  {
    path: PATH.IMAGEN,
    title: 'Imagen 1',
    icon: 'fa-regular fa-image',
    classCSS: 'd-flex justify-content-center align-items-center p-2',
    submenu: [],
  },
  {
    path: PATH.CONTACTO,
    title: 'Contacto',
    icon: 'fa-solid fa-address-book',
    classCSS: 'd-flex justify-content-center align-items-center p-2',
    submenu: [],
  },
  {
    path: PATH.ACERCADE,
    title: 'Acerca De',
    icon: 'fa-solid fa-address-card',
    classCSS: 'd-flex justify-content-center align-items-center p-2',
    submenu: [],
  },
];
