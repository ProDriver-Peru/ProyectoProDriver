import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { MessageService } from 'src/app/service/message.service';
import { usuarioService } from 'src/app/service/usuario.service';
import { Usuario } from 'src/model/usuario';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css'],
})
export class PanelComponent implements OnInit {
  nombre: string = '';
  lastName: string = '';

  email: string = '';

  constructor(
    private usuarioService: usuarioService,
    private router: Router,
    private route: ActivatedRoute,
    private messageService: MessageService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    /*
    this.messageService.getMsg().subscribe((nombre:any)=>{
      this.nombre=nombre;
      console.log(nombre);
    })
    */
    this.authService.getUsuario().subscribe((usuario: Usuario) => {
      this.nombre = usuario.name;
      this.lastName = usuario.lastName;
      console.log(this.nombre);
    });
  }
}
