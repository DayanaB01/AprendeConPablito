import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { MainVisualComponent } from './components/main-visual/main-visual.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FooterComponent } from './components/footer/footer.component';
import { SomosComponent } from './components/somos/somos.component';
import { ContactosComponent } from './components/contactos/contactos.component';
import { GrupoMedicamentosComponent } from './components/grupo-medicamentos/grupo-medicamentos.component';
import { TrocillosComponent } from './components/trocillos/trocillos.component';
import { MedicamentoComponent } from './components/medicamento/medicamento.component';
import { TecnicasEstudioComponent } from './components/tecnicas-estudio/tecnicas-estudio.component';
import { TecnicasEstudioExpComponent } from './components/tecnicas-estudio-exp/tecnicas-estudio-exp.component';
import { GeneralidadesComponent } from './components/generalidades/generalidades.component';
import { FuntamentalComponent } from './components/funtamental/funtamental.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    MainVisualComponent,
    FooterComponent,
    SomosComponent,
    ContactosComponent,
    GrupoMedicamentosComponent,
    TrocillosComponent,
    MedicamentoComponent,
    TecnicasEstudioComponent,
    TecnicasEstudioExpComponent,
    GeneralidadesComponent,
    FuntamentalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
