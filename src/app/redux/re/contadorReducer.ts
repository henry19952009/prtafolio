import { Action } from "@ngrx/store";
import { HttpClient } from '@angular/common/http';

export function apiRest(state: any, action: Action){
  switch (action.type){

    case 'get':

      return state="caso get"
    case 'post':
      return state="caso post"
    default:
      return state
  }
}



