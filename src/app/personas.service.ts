import { Persona } from "./persona.model";




export class PersonasService {
    personas:Persona[]=[new Persona('Oscar','Fiscal'),(new Persona('Hola','Mundo'))];
    
    agregarPersona(persona:Persona){
      
      this.personas.push(persona)
      }
}