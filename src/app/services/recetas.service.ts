import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecetasService {
    
  term = new BehaviorSubject<string>('');
  term$ = this.term.asObservable();
  constructor() { }
  
  recetas: any[] = [
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqC3pTZiOdLb4QKiqDjHPoYuS3BoCfCiXRZA&s",
        nombre: "Spaghetti a la Boloñesa",
        ingredientes: [
            "400 g de spaghetti",
            "500 g de carne molida",
            "1 cebolla picada",
            "2 dientes de ajo",
            "400 g de tomate triturado",
            "Aceite de oliva",
            "Sal y pimienta"
        ],
        instrucciones: [
            "Cocina los spaghetti en agua con sal.",
            "Sofríe la cebolla y el ajo en aceite de oliva.",
            "Añade la carne y cocina hasta que esté dorada.",
            "Incorpora el tomate triturado, sal y pimienta.",
            "Deja cocer a fuego lento 20 minutos.",
            "Sirve la salsa sobre los spaghetti."
        ],
        tiempo_preparacion: "30 minutos",
        dificultad: "Fácil"
    },
    {
        img: "https://i.ytimg.com/vi/QjNO3T9YgxA/maxresdefault.jpg",
        nombre: "Tacos de Pollo",
        ingredientes: [
            "500 g de pechuga de pollo",
            "Tortillas de maíz",
            "1 cebolla",
            "1 pimiento verde",
            "Cilantro fresco",
            "Salsa al gusto",
            "Sal y pimienta"
        ],
        instrucciones: [
            "Corta el pollo en tiras y cocina en una sartén con sal y pimienta.",
            "Sofríe la cebolla y el pimiento.",
            "Sirve el pollo en las tortillas con las verduras.",
            "Añade cilantro y salsa al gusto."
        ],
        tiempo_preparacion: "25 minutos",
        dificultad: "Fácil"
    },
    {
        img: "https://www.gourmet.cl/wp-content/uploads/2016/09/Ensalada_C%C3%A9sar-web.jpg",
        nombre: "Ensalada César",
        ingredientes: [
            "1 lechuga romana",
            "100 g de croutones",
            "50 g de queso parmesano",
            "Salsa César",
            "1 pechuga de pollo (opcional)"
        ],
        instrucciones: [
            "Corta la lechuga y colócala en un bol.",
            "Añade los croutones y el queso parmesano.",
            "Agrega la salsa César y mezcla bien.",
            "Si lo deseas, añade pollo a la parrilla en tiras."
        ],
        tiempo_preparacion: "15 minutos",
        dificultad: "Muy fácil"
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZjo9nnM4x4yqYkNG8kQmUvHpcpPr1pvlOGA&s",
        nombre: "Pizza Margherita",
        ingredientes: [
            "1 masa de pizza",
            "200 g de salsa de tomate",
            "200 g de mozzarella",
            "Hojas de albahaca fresca",
            "Aceite de oliva"
        ],
        instrucciones: [
            "Precalienta el horno a 220°C.",
            "Extiende la salsa de tomate sobre la masa.",
            "Añade la mozzarella y las hojas de albahaca.",
            "Hornea durante 10-12 minutos hasta que la masa esté crujiente.",
            "Rocía con un poco de aceite de oliva antes de servir."
        ],
        tiempo_preparacion: "20 minutos",
        dificultad: "Fácil"
    },
    {
        img: "https://www.recetasnestle.com.ec/sites/default/files/srh_recipes/e27c310d66805447a62e25cbcd696442.jpg",
        nombre: "Ceviche de Pescado",
        ingredientes: [
            "500 g de pescado fresco (corvina o merluza)",
            "2 limones",
            "1 cebolla roja",
            "Cilantro fresco",
            "Sal y pimienta",
            "Ají picado (opcional)"
        ],
        instrucciones: [
            "Corta el pescado en cubos pequeños.",
            "Exprime los limones sobre el pescado y deja marinar por 15 minutos.",
            "Añade la cebolla en rodajas, el cilantro y el ají.",
            "Condimenta con sal y pimienta."
        ],
        tiempo_preparacion: "20 minutos",
        dificultad: "Media"
    },
    {
        img: "https://www.flora.es/-/media/Project/Upfield/Brands/Becel-NL/Flora-ES/Assets/Recetas/23dafa90-1d96-436b-b548-3d20a420d0f1.jpg?rev=0f8543d06d9c4299acd26dda77319fbc",
        nombre: "Brownies de Chocolate",
        ingredientes: [
            "200 g de chocolate negro",
            "150 g de mantequilla",
            "200 g de azúcar",
            "3 huevos",
            "100 g de harina",
            "1 cucharadita de extracto de vainilla",
            "1 pizca de sal"
        ],
        instrucciones: [
            "Precalienta el horno a 180°C.",
            "Derrite el chocolate y la mantequilla juntos.",
            "En un bol, bate los huevos con el azúcar hasta que la mezcla blanquee.",
            "Agrega el chocolate derretido y la vainilla, y mezcla bien.",
            "Incorpora la harina y la sal, y mezcla hasta obtener una masa homogénea.",
            "Vierte en un molde engrasado y hornea durante 20-25 minutos.",
            "Deja enfriar antes de cortar en porciones."
        ],
        tiempo_preparacion: "35 minutos",
        dificultad: "Fácil"
    }
  ];
  
  get():any{
    return this.recetas;
  }

  getTerm():string{
    return this.term.getValue();
  }

  setTerm(t: string):void{
    this.term.next(t);
  }
}
