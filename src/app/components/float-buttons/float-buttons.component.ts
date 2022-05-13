import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { NativeAudio } from '@awesome-cordova-plugins/native-audio/ngx';
@Component({
  selector: 'app-float-buttons',
  templateUrl: './float-buttons.component.html',
  styleUrls: ['./float-buttons.component.scss'],
})
export class FloatButtonsComponent implements OnInit {

  public idioma: string="";
  public tema: string="";
  constructor(private nativeAudio: NativeAudio) { }

  ngOnInit() 
  {
    // this.cargarAudiosAnimalesEspaniol();
    this.cargarAudiosAnimalesIngles();
    this.cargarAudiosAnimalesPortugues();
    // this.cargarAudiosColoresEspaniol();
    this.cargarAudiosColoresIngles();
    this.cargarAudiosColoresPortugues();
    // this.cargarAudiosNumerosEspaniol();
    this.cargarAudiosNumerosIngles();
    this.cargarAudiosNumerosPortugues();
  }
  cargarAudiosAnimalesEspaniol()
  {
    this.nativeAudio.preloadComplex('vaca', 'assets/media/vaca.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('caballo', 'assets/media/caballo.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('gallina', 'assets/media/gallina.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('perro', 'assets/media/perro.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('gato', 'assets/media/gato.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('conejo', 'assets/media/conejo.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('pez', 'assets/media/pez.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('oveja', 'assets/media/oveja.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('pato', 'assets/media/pato.mp3', 1, 1, 0).then(() => {     });
  }
  cargarAudiosAnimalesPortugues()
  {
    this.nativeAudio.preloadComplex('vacaP', 'assets/media/vacaP.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('caballoP', 'assets/media/caballoP.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('gallinaP', 'assets/media/gallinaP.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('perroP', 'assets/media/perroP.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('gatoP', 'assets/media/gatoP.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('conejoP', 'assets/media/conejoP.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('pezP', 'assets/media/pezP.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('ovejaP', 'assets/media/ovejaP.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('patoP', 'assets/media/patoP.mp3', 1, 1, 0).then(() => {     });
  }

  cargarAudiosAnimalesIngles()
  {
    this.nativeAudio.preloadComplex('vacaI', 'assets/media/vacaI.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('caballoI', 'assets/media/caballoI.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('gallinaI', 'assets/media/gallinaI.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('perroI', 'assets/media/perroI.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('gatoI', 'assets/media/gatoI.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('conejoI', 'assets/media/conejoI.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('pezI', 'assets/media/pezI.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('ovejaI', 'assets/media/ovejaI.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('patoI', 'assets/media/patoI.mp3', 1, 1, 0).then(() => {     });
  }
  cargarAudiosNumerosEspaniol()
  {
    this.nativeAudio.preloadComplex('uno', 'assets/media/uno.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('dos', 'assets/media/dos.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('tres', 'assets/media/tres.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('cuatro', 'assets/media/cuatro.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('cinco', 'assets/media/cinco.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('seis', 'assets/media/seis.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('siete', 'assets/media/siete.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('ocho', 'assets/media/ocho.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('nueve', 'assets/media/nueve.mp3', 1, 1, 0).then(() => {     });
  }
  cargarAudiosNumerosPortugues()
  {
    this.nativeAudio.preloadComplex('unoP', 'assets/media/unoP.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('dosP', 'assets/media/dosP.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('cuatroP', 'assets/media/cuatroP.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('cincoP', 'assets/media/cincoP.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('seisP', 'assets/media/seisP.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('sieteP', 'assets/media/sieteP.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('ochoP', 'assets/media/ochoP.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('nueveP', 'assets/media/nueveP.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('tresP', 'assets/media/tresP.mp3', 1, 1, 0).then(() => {     });
  }

  cargarAudiosNumerosIngles()
  {
    this.nativeAudio.preloadComplex('unoI', 'assets/media/unoI.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('dosI', 'assets/media/dosI.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('tresI', 'assets/media/tresI.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('cuatroI', 'assets/media/cuatroI.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('cincoI', 'assets/media/cincoI.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('seisI', 'assets/media/seisI.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('sieteI', 'assets/media/sieteI.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('ochoI', 'assets/media/ochoI.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('nueveI', 'assets/media/nueveI.mp3', 1, 1, 0).then(() => {     });
  }

  cargarAudiosColoresEspaniol()
  {
    this.nativeAudio.preloadComplex('rojo', 'assets/media/rojo.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('azul', 'assets/media/azul.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('rosa', 'assets/media/rosa.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('amarillo', 'assets/media/amarillo.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('verde', 'assets/media/verde.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('violeta', 'assets/media/violeta.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('negro', 'assets/media/negro.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('blanco', 'assets/media/blanco.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('naranja', 'assets/media/naranja.mp3', 1, 1, 0).then(() => {     });
  }
  cargarAudiosColoresPortugues()
  {
    this.nativeAudio.preloadComplex('rojoP', 'assets/media/rojoP.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('azulP', 'assets/media/azulP.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('rosaP', 'assets/media/rosaP.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('amarilloP', 'assets/media/amarilloP.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('verdeP', 'assets/media/verdeP.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('violetaP', 'assets/media/violetaP.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('negroP', 'assets/media/negroP.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('blancoP', 'assets/media/blancoP.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('naranjaP', 'assets/media/naranjaP.mp3', 1, 1, 0).then(() => {     });
  }

  cargarAudiosColoresIngles()
  {
    this.nativeAudio.preloadComplex('rojoI', 'assets/media/rojoI.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('azulI', 'assets/media/azulI.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('rosaI', 'assets/media/rosaI.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('amarilloI', 'assets/media/amarilloI.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('verdeI', 'assets/media/verdeI.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('violetaI', 'assets/media/violetaI.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('negroI', 'assets/media/negroI.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('blancoI', 'assets/media/blancoI.mp3', 1, 1, 0).then(() => {     });
    this.nativeAudio.preloadComplex('naranjaI', 'assets/media/naranjaI.mp3', 1, 1, 0).then(() => {     });
  }

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

  selecioneAlgo(seleccion:string)
  {
    if(this.idioma=="ingles")
    {
      var eleccion = seleccion+"I";
      this.nativeAudio.play(eleccion, function (){
        this.nativeAudio.stop();
      }) 
    }
    if(this.idioma=="portugues")
    {
      var eleccion = seleccion+"P";
      this.nativeAudio.play(eleccion, function (){
        this.nativeAudio.stop();
      }) 
    }
    if(this.idioma=="espaniol")
    {
      this.nativeAudio.play(seleccion, function (){
        this.nativeAudio.stop();
      }) 
    }
  }


}
