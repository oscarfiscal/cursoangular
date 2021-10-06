import { Component } from "@angular/core";

@Component({
    selector:'app-personas',
    templateUrl: './Personas.component.html',
    styleUrls:['./personas.component.css']
})



export class PersonasComponent{
deshabilitar = false;
mensaje = 'No se ha agregado ninguna persona';
titulo ='';
agregarPersona(){
    this.mensaje= 'Persona Agregada';
}
modificarTitulo(event:Event){
this.titulo= (<HTMLInputElement>event.target).value;
}
}