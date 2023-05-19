import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { data } from 'jquery';
import { usuario } from './mascota';
import { ReComponent } from '../redux/re/re.component';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  usuarioModel = new usuario("", "", 0);
  constructor(private http:HttpClient, private re : ReComponent){}
  formularioEnviado(){
    /*
    Aquí el formulario ha sido enviado, ya sea
    por presionar el botón, presionar Enter, etcétera
    */
     this.re.enviarDatos();
    console.log("El formulario fue enviado : ", this.usuarioModel)
    alert("Enviado");

    const data=this.http.post("api/projects",this.usuarioModel).subscribe(data=>
    console.log(data))
      return data;
  }
}
