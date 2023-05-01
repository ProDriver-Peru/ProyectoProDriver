import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { RegisterComponent } from './component/register/register.component';
import { InicioReclutComponent } from './component/inicio-reclut/inicio-reclut.component';
import { PropuestaComponent } from './component/propuesta/propuesta.component';
import { ListPropuestaComponent } from './component/list-propuesta/list-propuesta.component';

const routes: Routes = [
  {
    path: 'login', component:LoginComponent,
  },
  {
    path: 'home', component:HomeComponent,
  },
  {
    path: 'register', component:RegisterComponent
  },
  {
    path: 'inicior', component:InicioReclutComponent
  },
  {
    path:'propuesta', component:PropuestaComponent
  },
  {
    path:'listarPropuesta', component:ListPropuestaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
