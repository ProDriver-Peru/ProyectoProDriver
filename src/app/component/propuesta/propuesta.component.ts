import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { propuestaService } from 'src/app/service/propuesta.service';
import { propuesta } from 'src/model/propuesta';

@Component({
  selector: 'app-propuesta',
  templateUrl: './propuesta.component.html',
  styleUrls: ['./propuesta.component.css']
})
export class PropuestaComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  propuesta: propuesta = new propuesta();
  mensaje: string = "";

  constructor(private propuestaService:propuestaService, private router: Router, private route:ActivatedRoute){}

  ngOnInit(): void {
    this.form = new FormGroup({
      id: new FormControl(),
      description: new FormControl('',Validators.required),
      licenseTypeRequired: new FormControl('',Validators.required),
      experienceYear: new FormControl('',Validators.required)
    })
  }

  aceptar():void{
    this.propuesta.id = this.form.value['id'];
    this.propuesta.description = this.form.value['description'];
    this.propuesta.licenseTypeRequired = this.form.value['licenseTypeRequired'];
    this.propuesta.experienceYear = this.form.value['experienceYear'];
    this.propuesta.appliers = 0;
    this.propuesta.idEmploye = "RI";

    if (this.form.valid) {

      this.propuestaService.insertPropuesta(this.propuesta).subscribe(data=>
        this.router.navigate(['/home/listarPropuesta']).then(()=>{
          window.location.reload();

        })
      )
    }

  }

}
