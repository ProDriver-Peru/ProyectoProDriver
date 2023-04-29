import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { usuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  nombre:string="";
  lastName:string="";

  email:string="";

  constructor(private usuarioService:usuarioService, private router: Router, private route:ActivatedRoute){}

  ngOnInit(): void {

    this.email = this.usuarioService.returnEmail();

    console.log(this.email)

    this.usuarioService.getCredencial(this.email).subscribe((data=>{
      this.nombre=data.name,
      this.lastName=data.lastName
    }))

  }

}
