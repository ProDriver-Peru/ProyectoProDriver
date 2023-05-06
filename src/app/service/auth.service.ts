import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environment/environment';
import { Usuario } from 'src/model/usuario';

const baseUrl = environment.base;

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnInit {
  private urlUsuario = `${baseUrl}/usuario`;

  private isLoggedIn: Subject<boolean> = new Subject<boolean>();
  private usuario: Subject<Usuario> = new Subject<Usuario>();

  constructor(private http: HttpClient) {}
  ngOnInit(): void {}

  login(id: string, password: string) {
    this.checkLogin(id, password).subscribe((usuario: Usuario) => {
      if (usuario.id == id && usuario.password == password) {
        this.usuario.next(usuario);
        this.isLoggedIn.next(true);
      } else {
        this.usuario.next(new Usuario());
        this.isLoggedIn.next(false);
      }
    });
  }

  checkLogin(id: string, password: string): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.urlUsuario}/${id}`);
    console.log(id);

  }

  logout() {
    this.usuario.next(new Usuario());
    this.isLoggedIn.next(false);
  }

  getIsLoggedIn() {
    return this.isLoggedIn.asObservable();
  }

  setIsLoggedIn(isLoggedIn: boolean) {
    this.isLoggedIn.next(isLoggedIn);
  }

  getUsuario() {
    return this.usuario.asObservable();
  }
}
