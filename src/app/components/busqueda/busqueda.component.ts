import { Component } from '@angular/core';
import { RecetasService } from '../../services/recetas.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrl: './busqueda.component.css'
})
export class BusquedaComponent {
  constructor(public _service:RecetasService){
  }
}
