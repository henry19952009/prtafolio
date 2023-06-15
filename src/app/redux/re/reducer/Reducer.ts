import { createReducer, createSelector, on } from "@ngrx/store";

import  {apiGet, apiPost}  from "../accion/accion";

import { IApiStateGet } from "../models/api.state.modelget";



export const initialState:IApiStateGet={type:"",datos:[]}

export const reducerGet= createReducer(initialState, on(apiGet,(state, {datos})=>{
  return {...state, type:"get", datos}}
))







