import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'src/app/service/message.service';
import { usuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  nombre:any;
  lastName:string="";

  email:string="";

  constructor(private usuarioService:usuarioService, private router: Router, private route:ActivatedRoute, private messageService: MessageService){
    this.nombre="";
  }

  ngOnInit(): void {

    this.messageService.getMsg().subscribe((nombre:any)=>{
      this.nombre=nombre;
      console.log(nombre);
    })

  }

}
