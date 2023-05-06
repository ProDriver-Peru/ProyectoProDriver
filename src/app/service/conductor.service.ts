import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environment/environment";
import { conductor } from "src/model/conductor";

const baseUrl = environment.base;

@Injectable
({
  providedIn: 'root'
})

export class conductorService{

  private urlDriver = `${baseUrl}/conductor`;//alt+96

  constructor(private http:HttpClient) { } //inyectar httpClient

  listDrivers():Observable<any>{
    return this.http.get<conductor[]>(this.urlDriver)
  }
}

