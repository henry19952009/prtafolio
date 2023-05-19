import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { data } from 'jquery';
import { usuario } from './mascota';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  usuarioModel = new usuario("", "", 0);
  constructor(private http:HttpClient){}
  formularioEnviado(){
    /*
    Aquí el formulario ha sido enviado, ya sea
    por presionar el botón, presionar Enter, etcétera
    */
    console.log("El formulario fue enviado : ", this.usuarioModel)
    alert("Enviado");

    const data=this.http.post("formulario",this.usuarioModel).subscribe(data=>
    console.log(data))
      return data;
  }
}
