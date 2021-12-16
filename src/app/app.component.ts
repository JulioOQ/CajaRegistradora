import { Component, Output } from '@angular/core';
import { Producto } from './models/producto.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  arrayComida:Producto[];
  arrayBebida:Producto[];
 @Output() arraySeleccionados:Producto[];




  constructor(){
    this.arrayComida=[
      new Producto("Ceviche","https://www.aboutespanol.com/thmb/G_Ps3MJ7KlSfWNqKAP0yeXlfMZc=/3776x2520/filters:fill(auto,1)/ceviche-5b01daff6bf0690036a376d8.jpg",15),
      new Producto("Arroz con Pollo","https://comidasperuanas.net/wp-content/uploads/2015/07/Arroz-con-pollo-peruano.jpg",10),
      new Producto("Chaufa de Pollo","https://cdn.bolivia.com/gastronomia/2012/11/13/arroz-chaufa-con-pollo-3497.jpg",18),
      new Producto("Ceviche","https://www.aboutespanol.com/thmb/G_Ps3MJ7KlSfWNqKAP0yeXlfMZc=/3776x2520/filters:fill(auto,1)/ceviche-5b01daff6bf0690036a376d8.jpg",15),
      new Producto("Arroz con Pollo","https://comidasperuanas.net/wp-content/uploads/2015/07/Arroz-con-pollo-peruano.jpg",10),
      new Producto("Chaufa de Pollo","https://cdn.bolivia.com/gastronomia/2012/11/13/arroz-chaufa-con-pollo-3497.jpg",18),
    ];

    this.arrayBebida=[
      new Producto("Inka Cola","https://merkaplace.ca/2774-large_default/botella-de-inca-kola-peruana-300ml-original.jpg",2.5),
      new Producto("Fanta","https://www.burgerking.pe/Multimedia/productos/facebook/FANTA_ORIGINAL_V2.png",3.5),
      new Producto("Coca Cola","https://tatami.com.pe/159-large_default/coca-cola.jpg",18),
      new Producto("Inka Cola","https://merkaplace.ca/2774-large_default/botella-de-inca-kola-peruana-300ml-original.jpg",2.5),
      new Producto("Fanta","https://www.burgerking.pe/Multimedia/productos/facebook/FANTA_ORIGINAL_V2.png",3.5),
      new Producto("Coca Cola","https://tatami.com.pe/159-large_default/coca-cola.jpg",18)
    ];
    this.arraySeleccionados=[];
    
  }

  onSeleccionados($event){   

    let encontrado =this.arraySeleccionados.find(producto => producto.nombre===$event.nombre);
    if(encontrado){
      encontrado.cantidad++;  
      
    }else{
      $event.cantidad=1;
      this.arraySeleccionados.push($event);

    }

    console.log(this.arraySeleccionados);

  }


}
