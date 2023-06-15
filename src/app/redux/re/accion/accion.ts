
import { Action, createAction, props, Store } from '@ngrx/store';


export const apiGet= createAction(
  '[apiGet] get',
  props<{
    datos:any[]
  }>()
)

export const apiPost= createAction(
  '[apiPost] post'
)










