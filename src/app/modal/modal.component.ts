import { Component,OnInit } from '@angular/core';
import { ApiPeliculasComponent } from '../api-peliculas/api-peliculas.component';

declare const M: any;
@Component({

  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit{
constructor(private apc: ApiPeliculasComponent){};
  imagenesBaner:any;
  tituloBaner:any;
  ngOnInit(): void {
  const elems = document.querySelectorAll('.modal');
  const options = {};
  M.Modal.init(elems, options);
  this.apc.obtnerDatos()
  this.apc.iniciarApi()
  this.datosModal();
}
  datosModal(){
  this.imagenesBaner=this.apc.imagen;
  this.tituloBaner=this.apc.movie;
  console.log(this.imagenesBaner)

  }
}

