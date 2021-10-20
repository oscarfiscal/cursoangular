import { Component } from '@angular/core';
import { LoggingService } from './LoggingService.service';
import { Persona } from './persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado Personas';
  personas:Persona[]=[new Persona('Oscar','Fiscal'),(new Persona('Hola','Mundo'))];

  constructor(private loggingService:LoggingService){

  }
personaAgregada(persona:Persona){
  this.loggingService.enviaMensajeAConsola("agregamos al arreglo la nueva persona"+ persona.nombre);
this.personas.push(persona)
}
  
}
