import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(httpClient: HttpClient) { }

  obtenerTodasLasPersonas(){

  }

  agregarPersona(persona: any){
    
  }

  eliminarPersona(identificador){
    
  }
}
