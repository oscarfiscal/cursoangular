import { Component } from '@angular/core';
import { Persona } from './persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado Personas';
  personas:Persona[]=[new Persona('Oscar','Fiscal'),(new Persona('Hola','Mundo'))];
  nombreInput:string = ''
  apellidoInput:string = ''

  agregarPersona(){
    let persona1 = new Persona(this.nombreInput,this.apellidoInput);
    this.personas.push(persona1);
    console.log(this.personas);
  }

  
}
