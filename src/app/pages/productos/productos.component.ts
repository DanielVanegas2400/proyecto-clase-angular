import { Component, OnInit } from '@angular/core';
import { ProductoInterface } from '../../core/interface/producto.interface';
import { TablaComponent } from '../../components/tabla/tabla.component';
import { ThisReceiver } from '@angular/compiler';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-productos',
  standalone: true,
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css',
  imports: [TablaComponent],
})
export class ProductosComponent implements OnInit {
  misProductos: ProductoInterface[] = [];
  titulo: string = 'Lista de Productos';
  columnas: string[] = ['nombre', 'sku', 'cantidad', 'precio'];
  informacion: any;

  ngOnInit(): void {
    this.misProductos = [
      {
        nombre: 'Pantalon',
        sku: 'P6576',
        cantidad: 85,
        precio: 85000,
      },
      {
        nombre: 'Chaqueta',
        sku: 'P6852',
        cantidad: 96,
        precio: 15000,
      },
      {
        nombre: 'Medias',
        sku: 'P8547',
        cantidad: 159,
        precio: 98000,
      },
      {
        nombre: 'Camisas',
        sku: 'P7415',
        cantidad: 63,
        precio: 25963,
      },
    ];
  }

  recibirInformacion(data: any) {
    this.informacion = data;
    Swal.fire({
      title: 'Productos seleccionados',
      icon: 'info',
      html: `Nombre: ${data.nombre}<br>
            SKU: ${data.sku}<br>
            Cantidad: ${data.cantidad}<br>
            Precio: ${data.precio}`,
    });
  }
}
