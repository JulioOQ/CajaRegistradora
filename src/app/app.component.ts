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
      new Producto("Arroz con pollo","https://comidasperuanas.net/wp-content/uploads/2015/07/Arroz-con-pollo-peruano.jpg",10),
      new Producto("Chaufa de pollo","https://cdn.bolivia.com/gastronomia/2012/11/13/arroz-chaufa-con-pollo-3497.jpg",18),
      new Producto("Chihcarron de pescado","https://i2.wp.com/www.berypez.pe/wp-content/uploads/2020/06/p04-chicharron-de-pescado.jpg",25),
      new Producto("Chita frita","https://i.pinimg.com/originals/98/a8/3c/98a83cb0b7ba62f70edb7c304d984e1b.jpg",10),
      new Producto("Chupe de camarones","https://img-global.cpcdn.com/recipes/1478510_169f43c3ceb34d13/1200x630cq70/photo.jpg",18),
    ];

    this.arrayBebida=[
      new Producto("Inka Cola","https://merkaplace.ca/2774-large_default/botella-de-inca-kola-peruana-300ml-original.jpg",2.50),
      new Producto("Fanta","https://www.burgerking.pe/Multimedia/productos/facebook/FANTA_ORIGINAL_V2.png",3.50),
      new Producto("Coca Cola","https://tatami.com.pe/159-large_default/coca-cola.jpg",18),
      new Producto("Pepsi","https://wongfood.vteximg.com.br/arquivos/ids/273848-750-750/103181-1.jpg",2.20),
      new Producto("Guarana","http://s3.amazonaws.com/imagenes-sellers-mercado-ripley/2020/11/11100735/6304.png",3.20),
      new Producto("Sprite","https://tatami.com.pe/191-large_default/sprite.jpg",2.50)
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
