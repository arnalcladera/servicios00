import { Component } from '@angular/core';
import { ProductosService } from './servicio/productos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'servicios00';
  productos: any;

  constructor( productosService: ProductosService ){
    this.productos = productosService.productos.rows;
  }

}
