import { TareasInterfaceTs } from './../../core/interface/tareas.interface.ts';
import { TablaComponent } from './../../components/tabla/tabla.component';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista-tareas',
  standalone: true,
  imports: [TablaComponent, FormsModule],
  templateUrl: './lista-tareas.component.html',
  styleUrl: './lista-tareas.component.css',
})
export class ListaTareasComponent implements OnInit {
  tarea: string = '';
  comentario: string = '';
  misTareas: TareasInterfaceTs[] = [];
  columnas: string[] = ['tarea', 'comentario'];
  titulo: string = 'Lista de Tareas';
  nuevasTareas: any;

  ngOnInit(): void {
    this.misTareas = [
      {
        tarea: 'Tarea 1',
        comentario: 'Realizarla para x tiempo',
      },
    ];
  }

  agregarTareas() {
    this.misTareas.push({
      tarea: this.tarea,
      comentario: this.comentario,
    });
    this.tarea = '';
    this.comentario = '';
  }

  recibirTareas(item: TareasInterfaceTs) {
    Swal.fire({
      title: 'Productos seleccionados',
      icon: 'info',
      html: `Tarea: ${item.tarea}<br>
            Comentario: ${item.comentario}<br>`,
    });
  }
}
