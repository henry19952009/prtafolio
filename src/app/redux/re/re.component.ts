import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Action, Store } from '@ngrx/store';
import {IAppState} from './store'




@Component({
  selector: 'app-re',
  templateUrl: './re.component.html',
  styleUrls: ['./re.component.css']
})
@Injectable({providedIn: 'root'})
export class ReComponent{
  constructor(private http: HttpClient, private store: Store<IAppState>, ) {
    this.store.subscribe(state => {
      console.log(state)
    });
  }


  obtenerDatos(){
    const accion : Action={
      type: 'get'
    }

    this.store.dispatch(accion);
  }

  enviarDatos(){
    const accion : Action={
      type: 'post'
    }

    this.store.dispatch(accion)
  }


}
