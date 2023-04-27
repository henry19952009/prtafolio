import {  Component } from '@angular/core';
import{ Location }from '@angular/common';



import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { type } from 'jquery';



@Component({
  selector: 'app-api-peliculas',
  templateUrl: './api-peliculas.component.html',
  styleUrls: ['./api-peliculas.component.css']
})
export class ApiPeliculasComponent implements OnInit{

  title:any;
  imagen:any;
  id:string="";
  url="https://api.themoviedb.org/3/movie/popular?api_key=";
  key="8c84367d103d5239463d287812d5bafc";

  constructor(private location:Location, private http: HttpClient,){}
  ngOnInit(): void {

    /*consumo de la api*/
    this.obtnerDatos();
    this.iniciarApi();


    }
    /*boton de volver*/
  volver():void {
    this.location.back();
  };
    /*consulta para la api*/
  obtnerDatos()
  {var datos;
   var obtencionDatos= this.url+this.key;
   datos=this.http.get(obtencionDatos)

     return datos
}
 iniciarApi():void{

    //subscripcion a datos
    this.obtnerDatos().subscribe((data:any)=>{

      this.title= {titulo_1:data.results[0].title,
                    titulo_2:data.results[1].title,
                    titulo_3:data.results[2].title,
                    titulo_4:data.results[3].title
      }
      //console.log(type(data.results[0].title));
      this.imagen={//se utiliza el valor almacenado en data dirigiendo la atencien en cada json
        imagen_1:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2"+data.results[0].poster_path,
        imagen_2:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2"+data.results[1].poster_path,
        imagen_3:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2"+data.results[2].poster_path,
        imagen_4:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2"+data.results[3].poster_path
      }


    })



  }
  ventanaModal(){


  }



}


