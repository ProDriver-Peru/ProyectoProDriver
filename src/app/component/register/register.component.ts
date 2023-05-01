import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { usuarioService } from 'src/app/service/usuario.service';
import { Usuario } from 'src/model/usuario';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  usuario: Usuario = new Usuario();
  mensaje: string = "";

  constructor(private usuarioService:usuarioService, private router:Router, private route:ActivatedRoute){}

  ngOnInit(): void {

    this.form = new FormGroup({

      id: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required),
      rol: new FormControl(),

      dni: new FormControl('',Validators.required),
      name: new FormControl('',Validators.required),
      lastName: new FormControl('',Validators.required),
      email: new FormControl('',Validators.required),

      ruc: new FormControl('',Validators.required)

    })

  }

  aceptar():void{

    this.usuario.id = this.form.value['id'];  //username
    this.usuario.password = this.form.value['password'];
    this.usuario.rol = "Reclutador"; //this.form.value['rol'];

    this.usuario.name = this.form.value['name'];
    this.usuario.lastName = this.form.value['lastName'];
    this.usuario.email = this.form.value['email'];

    this.usuario.ruc = this.form.value['ruc'];

    if (this.form.valid) {

      this.usuarioService.insertUsuario(this.usuario).subscribe(data=>{
          this.router.navigate(['login']).then(()=>{
            window.location.reload()
          })
      })

    }

  }

}
