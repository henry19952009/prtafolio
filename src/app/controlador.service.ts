import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ControladorService {

  constructor(private http:HttpClient) { }
  obtenerDatos(){
   this.http.get("http://127.0.0.1:8000/").subscribe(data=>
     console.log("")
   );

  }

}
