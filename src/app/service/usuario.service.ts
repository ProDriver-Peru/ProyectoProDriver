import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environment/environment";
import { Usuario } from "src/model/usuario";

const baseUrl = environment.base;

@Injectable({
  providedIn: 'root'
})

export class usuarioService{

  private url = `${baseUrl}/usuario`;//alt+96

  constructor(private http:HttpClient) { } //inyectar httpClient

  getCredencial(email:String){
    return this.http.get<Usuario>(`${this.url}/${email}`);
  }

}
