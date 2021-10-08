import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent{

  valor1: number = 0 ;
 valor2:number = 0;

 @Output() resultadoSuma = new EventEmitter<number>();
 sumar():void{

  let resultado = this.valor1 + this.valor2;
  this.resultadoSuma.emit(resultado);  
}
 
}
