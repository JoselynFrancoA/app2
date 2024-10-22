import { Component } from '@angular/core';
import { RecetasService } from '../../services/recetas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  recetas:any[]=[];
  constructor(private _service:RecetasService){}
  ngOnInit(): void {
    this.recetas = this._service.get();
    this._service.term$.subscribe(
      () => {this.load()}      
    );
  }
  load(){
    let ter = this._service.getTerm().toLowerCase();
    if(ter){
      this.recetas=this._service.recetas.filter(
        v => v.nombre.toLowerCase().includes(ter)
      );
    }else{
      this.recetas = this._service.get();
    }
  }
}
