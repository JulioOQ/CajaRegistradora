import { Component, Input, OnInit, Output } from '@angular/core';
import { Producto } from 'src/app/models/producto.model';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  @Input() titulo:string;
  @Input() productos:Producto[];

  @Output() productosSeleccionados : EventEmitter<Producto>;
  

  constructor() {
    this.productosSeleccionados= new EventEmitter();
   }

  ngOnInit(): void {
  }

  cliqueados(producto){
    this.productosSeleccionados.emit(producto);
    //console.log(this.productosSeleccionados);
    
  }

}
