import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 titulo = 'Aplicacion Calculadora' 
 valor1: number = 0 ;
 valor2:number = 0;
 resultado:number = 0;

 sumar():void{
   this.resultado = this.valor1 + this.valor2;
 }
}
