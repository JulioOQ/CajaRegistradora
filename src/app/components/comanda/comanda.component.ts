import { Component, Input, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto.model';
import { ListaProductosComponent } from '../lista-productos/lista-productos.component';

@Component({
  selector: 'app-comanda',
  templateUrl: './comanda.component.html',
  styleUrls: ['./comanda.component.css']
})
export class ComandaComponent implements OnInit {

  @Input() arraySelecComan:Producto[];

  constructor() {
    
   }

  ngOnInit(): void {
  }

  calcularTotal(){
    let total=0;
    for(let producto of this.arraySelecComan){
      total+= (producto.precio) * producto.cantidad;
    }
    
    return total;

  }

  borrarProducto(indice){
    if(this.arraySelecComan[indice].cantidad==1){
    this.arraySelecComan.splice(indice,1);
    }else{
      this.arraySelecComan[indice].cantidad--;

    }

  }

}
