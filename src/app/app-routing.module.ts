import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { RegisterComponent } from './component/register/register.component';
import { InicioReclutComponent } from './component/inicio-reclut/inicio-reclut.component';
import { PropuestaComponent } from './component/propuesta/propuesta.component';
import { ListPropuestaComponent } from './component/list-propuesta/list-propuesta.component';
import { SearchPropuestaComponent } from './component/search-propuesta/search-propuesta.component';

const routes: Routes = [
  {
    path:'', redirectTo:'/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'inicio',
        component: InicioReclutComponent,
      },
      {
        path: 'propuesta',
        component: PropuestaComponent,
      },
      {
        path: 'listarPropuesta',
        component: ListPropuestaComponent,
      },
      {
        path: 'buscarPropuesta',
        component: SearchPropuestaComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
