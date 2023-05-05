import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { RegisterComponent } from './component/login/register/register.component';
import { InicioReclutComponent } from './component/home/employer/inicio-reclut/inicio-reclut.component';
import { PropuestaComponent } from './component/home/employer/propuesta/propuesta.component';
import { ListPropuestaComponent } from './component/home/employer/list-propuesta/list-propuesta.component';
import { SearchDriverComponent } from './component/home/employer/search-propuesta/search-driver.component';

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
        path: 'buscarConductor',
        component: SearchDriverComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
