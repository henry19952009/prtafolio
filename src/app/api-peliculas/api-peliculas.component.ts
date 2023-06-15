import {  Component, inject } from '@angular/core';
import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//redux
import { Store, StoreModule } from '@ngrx/store';
import { apiGet } from '../redux/re/accion/accion';
import { Observable } from 'rxjs';
import { selectApiFeature, selectDatosApi } from '../redux/re/selectors/api.selectors';






@Component({
  selector: 'app-api-peliculas',
  templateUrl: './api-peliculas.component.html',
  styleUrls: ['./api-peliculas.component.css']
})

export class ApiPeliculasComponent implements OnInit{
  get$:Observable<any>=new Observable();
  apI: any;
  datos:any;

  //url="https://api.themoviedb.org/3/movie/popular?api_key=";
  //key="8c84367d103d5239463d287812d5bafc";


  constructor( private http: HttpClient, private st: Store<any>){

   }

  ngOnInit(): void {

    /*consumo de la api*/
    this.obtnerDatos();


    /*redux*/
    this.get$ = this.st.select(selectDatosApi);



    }

    /*consulta para la api*/
  obtnerDatos()
  {
       this.http.get("http://127.0.0.1:8000/peliculas/").subscribe((data:any)=>{

        this.iniciarApi(data)
        this.st.dispatch(apiGet({datos:data.results}))
     })

     return this.datos

}
 iniciarApi(data:any){
      let url="https://www.themoviedb.org/t/p/w600_and_h900_bestv2";
      //se combierten los valores a un array
      var datosApi= Object.values(data.results);
      //se modifica los valores para ser usados en el arreglo
      this.datos = datosApi.map(function(movie:any) {
        return { ...movie, poster_path: url + movie.poster_path };

      });

      /*this.title= {titulo_1:data.results[0].title,
                    titulo_2:data.results[1].title,
                    titulo_3:data.results[2].title,
                    titulo_4:data.results[3].title,
                    titulo_5:data.results[4].title,
                    titulo_6:data.results[5].title,
                    titulo_7:data.results[6].title,
                    titulo_8:data.results[7].title
      }*/
    /* this.imagen={//se utiliza el valor almacenado en data dirigiendo la atencien en cada json
        imagen_1:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2"+data.results[0].poster_path,
        imagen_2:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2"+data.results[1].poster_path,
        imagen_3:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2"+data.results[2].poster_path,
        imagen_4:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2"+data.results[3].poster_path,
        imagen_5:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2"+data.results[4].poster_path,
        imagen_6:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2"+data.results[5].poster_path,
        imagen_7:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2"+data.results[6].poster_path,
        imagen_8:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2"+data.results[7].poster_path

      }*/


    return this.datos
  }



}
