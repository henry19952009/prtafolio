import { createSelector } from "@ngrx/store";
import { IAppState } from "../app.state";
import { IApiStateGet } from "../models/api.state.modelget";

export const selectApiFeature = (state :IAppState)=>state.type || state.datos;


export const selectDatosApi = createSelector(
  selectApiFeature,
  (state:IApiStateGet)=>state.type || state
);

