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
  description:any;
  id: string="";
  ngOnInit(): void {

  this.apc.obtnerDatos()
  this.cards();
  this.datosModal();
  console.log(this.description)

}
  datosModal(){
  this.apc.obtnerDatos().subscribe((data:any)=>{
    this.imagenesBaner={
      imagen_1:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2"+data.results[0].poster_path,
      imagen_2:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2"+data.results[1].poster_path,
      imagen_3:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2"+data.results[2].poster_path,
      imagen_4:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2"+data.results[3].poster_path}
      this.tituloBaner={
        titulo_1:data.results[0].title,
        titulo_2:data.results[1].title,
        titulo_3:data.results[2].title,
        titulo_4:data.results[3].title}
        this.description={
          description_1:data.results[0].overview,
        }
  });

  }
  cards():void{
    const elems = document.querySelectorAll('.modal');

    const options = {};
    M.Modal.init(elems, options);


  }

}

