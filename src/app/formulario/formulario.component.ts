import { Component, ElementRef,ViewChild} from '@angular/core';
import { LoggingService } from '../LoggingService.service';
import { Persona } from '../persona.model';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent  {

 

  @ViewChild('nombreInput') nombreInput:ElementRef;
  @ViewChild('apellidoInput') apellidoInput:ElementRef;

  constructor(private loggingService:LoggingService, private personasService:PersonasService){

  }

  agregarPersona(){
    let persona1 = new Persona(this.nombreInput.nativeElement.value,this.apellidoInput.nativeElement.value);
    this.loggingService.enviaMensajeAConsola("Enviamos Persona" + persona1.nombre 
  + "apellido:" + persona1.Apellido)
    // this.personaCreada.emit(persona1)
    this.personasService.agregarPersona(persona1);
    
  }

}
