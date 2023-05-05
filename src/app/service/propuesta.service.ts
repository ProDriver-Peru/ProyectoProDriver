import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environment/environment";
import { propuesta } from "src/model/propuesta";
import { Usuario } from "src/model/usuario";

const baseUrl = environment.base;

@Injectable({
  providedIn: 'root'
})

export class propuestaService{

  private urlPropuesta = `${baseUrl}/jobOffer`;//alt+96

  private id:string = "";

  constructor(private http:HttpClient) { } //inyectar httpClient

  insertPropuesta(propuesta:propuesta){
    return this.http.post(this.urlPropuesta, propuesta);
  }

  listPropues():Observable<any>{
    return this.http.get<propuesta[]>(this.urlPropuesta)
  }

  delete(id:string){
    return this.http.delete(this.urlPropuesta+"/"+id);
  }

}
