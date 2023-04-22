import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiPeliculasComponent } from './api-peliculas/api-peliculas.component';
import { PrincipalComponent } from './principal/PrincipalComponent';
import {ModalComponent} from './modal/modal.component'
const routes: Routes = [


{path:'', component: PrincipalComponent},

{path:'peliculas', component: ApiPeliculasComponent},

{path:'modal',component:ModalComponent},

{path:'**',redirectTo:'',pathMatch:'full'}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
