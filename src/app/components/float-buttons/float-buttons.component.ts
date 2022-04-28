import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-float-buttons',
  templateUrl: './float-buttons.component.html',
  styleUrls: ['./float-buttons.component.scss'],
})
export class FloatButtonsComponent implements OnInit {

  public idioma: string="";
  public tema: string="";
  constructor() { }

  ngOnInit() {}

  selectIngles(){
    this.idioma="ingles";
    console.log(this.idioma);
  }
  selectPortugues(){
    this.idioma="portugues";
    console.log(this.idioma);
  }
  selectEspaniol(){
    this.idioma="espaniol";
    console.log(this.idioma);
  }
  selectNumeros(){
    this.tema="numeros";
    console.log(this.tema);
  }
  selectAnimales(){
    this.tema="animales";
    console.log(this.tema);
  }
  selectColores(){
    this.tema="colores";
    console.log(this.tema);
  }


}
