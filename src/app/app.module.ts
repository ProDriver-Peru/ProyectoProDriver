import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatRadioModule } from '@angular/material/radio';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { MatMenuModule } from '@angular/material/menu';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { HeaderComponent } from './component/home/header/header.component';
import { MenuComponent } from './component/home/menu/menu.component';
import { PanelComponent } from './component/home/panel/panel.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { RegisterComponent } from './component/register/register.component';
import { InicioReclutComponent } from './component/inicio-reclut/inicio-reclut.component';
import { PropuestaComponent } from './component/propuesta/propuesta.component';
import { ListPropuestaComponent } from './component/list-propuesta/list-propuesta.component';
import { SearchPropuestaComponent } from './component/search-propuesta/search-propuesta.component';
import { DialogoComponent } from './component/list-propuesta/dialogo/dialogo.component';

import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    MenuComponent,
    PanelComponent,
    RegisterComponent,
    InicioReclutComponent,
    PropuestaComponent,
    ListPropuestaComponent,
    SearchPropuestaComponent,
    DialogoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatSortModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonToggleModule,
    MatIconModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
