import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
  nombre:string ='Oscar'
  apellido:string ='Fiscal'
  edad:number= 23
  //  private edad:number= 23

  //  getEdad():number { return this.edad}
  constructor() { }

  ngOnInit(): void {
    
  }

}
