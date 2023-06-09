import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router, Route } from '@angular/router';
import { usuarioService } from 'src/app/service/usuario.service';
import { Usuario } from 'src/model/usuario';
import 'rxjs';
import { MessageService } from 'src/app/service/message.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  usuario: Usuario = new Usuario();
  mensaje: string = '';

  credential: boolean = false;

  constructor(
    private usuarioService: usuarioService,
    private router: Router,
    private route: ActivatedRoute,
    private messageService: MessageService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    });
  }

  login() {
    /*
    this.usuarioService.getCredencial(this.form.value['email']).subscribe(data=>{
      {
         this.credetencialCheck(data.email, data.password);
      }
      {
       //this.messageService.sendMsg("nombre");
       this.authService.login(data.email, data.password);
      }
      {
        this.router.navigate(['/home/inicio']).then(()=>{
          window.location.reload();
        })
      }

    })
    */

    this.authService.login(this.form.value['email'], this.form.value['password']);
    if(this.authService.getIsLoggedIn()){
      this.router.navigate(['/home/inicio']).then(()=>{

      })
    }else{
      this.messageService.sendMsg("Credenciales incorrectas");
    }

  }

  credetencialCheck(email: string, password: string) {
    this.usuario.email = this.form.value['email'];
    this.usuario.password = this.form.value['password'];

    if (this.usuario.email == email && this.usuario.password == password) {
      this.credential = true;
      console.log('Bien');
    } else {
      console.log('Mal');
    }
  }
}
