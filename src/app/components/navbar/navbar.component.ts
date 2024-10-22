import { Component } from '@angular/core';
import { RecetasService } from '../../services/recetas.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(public _service:RecetasService){
  }
}
