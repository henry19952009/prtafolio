import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/PrincipalComponent';
//material
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApiPeliculasComponent } from './api-peliculas/api-peliculas.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalComponent } from './modal/modal.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ControladorService } from './controlador.service';
import { FormsModule } from '@angular/forms';
//redux
import { Store, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { ROOT_REDUCERS } from './redux/re/app.state';
import { FormularioComponent } from './formulario/formulario.component';
//formulario
import { ReactiveFormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    ApiPeliculasComponent,
    ModalComponent,
    NavbarComponent,
    FormularioComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDividerModule,
    MatCardModule,
    FlexLayoutModule,
    HttpClientModule,
    StoreModule.forRoot(ROOT_REDUCERS),
    ReactiveFormsModule,
    FormsModule,

  ],
  providers: [ControladorService,ModalComponent],

  bootstrap: [AppComponent]
})
export class AppModule {

 }
