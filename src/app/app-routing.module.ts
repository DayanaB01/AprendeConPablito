import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainVisualComponent } from './components/main-visual/main-visual.component';
import { SomosComponent } from './components/somos/somos.component';
import { ContactosComponent } from './components/contactos/contactos.component';
import { GrupoMedicamentosComponent } from './components/grupo-medicamentos/grupo-medicamentos.component';
import { MedicamentoComponent } from './components/medicamento/medicamento.component';
import { TrocillosComponent } from './components/trocillos/trocillos.component';
import { TecnicasEstudioComponent } from './components/tecnicas-estudio/tecnicas-estudio.component';
import { TecnicasEstudioExpComponent } from './components/tecnicas-estudio-exp/tecnicas-estudio-exp.component';
import { GeneralidadesComponent } from './components/generalidades/generalidades.component';
import { FuntamentalComponent } from './components/funtamental/funtamental.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'visualIndex', pathMatch: 'full'
  },
  {
    path:'visualIndex', component: MainVisualComponent
  },
  {
    path:'somos', component: SomosComponent
  },
  {
    path:'contactos', component: ContactosComponent
  },
  {
    path: 'grupoMedicamentos', component: GrupoMedicamentosComponent
  },
  {
    path: 'medicamento', component:MedicamentoComponent
  },
  {
    path: 'trocillos', component: TrocillosComponent
  },
  {
    path:'tecnicas', component:TecnicasEstudioComponent
  },
  {
    path:'explicacion', component: TecnicasEstudioExpComponent
  },
  {
    path: 'generalidades', component: GeneralidadesComponent
  },
  {
    path: 'fundamental', component: FuntamentalComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
