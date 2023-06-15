import { ActionReducerMap } from "@ngrx/store";
import { IApiStateGet } from "./models/api.state.modelget";
import { reducerGet } from "./reducer/Reducer";

export interface IAppState{

    type:IApiStateGet;
    datos:IApiStateGet;

}
export const ROOT_REDUCERS:ActionReducerMap<IAppState>={
  type: reducerGet,
  datos: reducerGet
}

