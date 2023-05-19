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

}
  datosModal(){
  this.apc.obtnerDatos().subscribe((data:any)=>{
    this.imagenesBaner={
      imagen_1:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2"+data.results[0].poster_path,
      imagen_2:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2"+data.results[1].poster_path,
      imagen_3:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2"+data.results[2].poster_path,
      imagen_4:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2"+data.results[3].poster_path,
      imagen_5:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2"+data.results[4].poster_path,
      imagen_6:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2"+data.results[5].poster_path,
      imagen_7:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2"+data.results[6].poster_path,
      imagen_8:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2"+data.results[7].poster_path}
      this.tituloBaner={
        titulo_1:data.results[0].title,
        titulo_2:data.results[1].title,
        titulo_3:data.results[2].title,
        titulo_4:data.results[3].title,
        titulo_5:data.results[4].title,
        titulo_6:data.results[5].title,
        titulo_7:data.results[6].title,
        titulo_8:data.results[7].title}
        this.description={
          description_1:data.results[0].overview,
          description_2:data.results[1].overview,
          description_3:data.results[2].overview,
          description_4:data.results[3].overview,
          description_5:data.results[4].overview,
          description_6:data.results[5].overview,
          description_7:data.results[6].overview,
          description_8:data.results[7].overview

        }
  });

  }
  cards():void{
    const elems = document.querySelectorAll('.modal');

    const options = {};
    M.Modal.init(elems, options);


  }

}

