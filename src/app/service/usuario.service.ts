import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environment/environment";
import { Usuario } from "src/model/usuario";

const baseUrl = environment.base;

@Injectable({
  providedIn: 'root'
})

export class usuarioService{

  private urlUsuario = `${baseUrl}/usuario`;//alt+96

  private id:string = "";

  constructor(private http:HttpClient) { } //inyectar httpClient

  getCredencial(email:string){
    this.id = email;
    return this.http.get<Usuario>(`${this.urlUsuario}/${email}`);
  }

  returnEmail(){
    return this.id;
  }

  insertUsuario(usuario:Usuario){
    return this.http.post(this.urlUsuario, usuario);
  }


}
