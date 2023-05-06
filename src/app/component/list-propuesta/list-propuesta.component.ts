import { Dialog, DialogRef } from '@angular/cdk/dialog';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { propuestaService } from 'src/app/service/propuesta.service';
import { propuesta } from 'src/model/propuesta';
import { DialogoComponent } from './dialogo/dialogo.component';

@Component({
  selector: 'app-list-propuesta',
  templateUrl: './list-propuesta.component.html',
  styleUrls: ['./list-propuesta.component.css']
})
export class ListPropuestaComponent implements OnInit {


  lista: propuesta[] = [];
  displayedColumns = ['id','description','licenseTypeRequired','experienceYear','appliers','idEmploye','eliminar'];
  dataSource = new MatTableDataSource<propuesta>();

  @ViewChild(MatPaginator) paginator : MatPaginator;
  @ViewChild(MatSort) sort : MatSort;

  constructor(private propuestaService: propuestaService, private router: Router, private dialogo:MatDialog ){}


  ngOnInit(): void {
    this.propuestaService.listPropues().subscribe(data=>{
      this.dataSource.data=data;
    })
  }

  ngAfterViewInit(){  //dsp q la pagina esta cargada recomeinda material asignar estos valoers
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  openDialog(id:string){

    const dialogRef = this.dialogo.open(DialogoComponent);
    dialogRef.afterClosed().subscribe(result=>{
      if (result) {
        this.delete(id);
      }
      else{
        console.log("False");
      }
    })

  }

  delete(id:string){
    this.propuestaService.delete(id).subscribe(()=>
      this.router.navigate(['home/inicio']).then(()=>{
        //window.location.reload();
      })
    )
  }

}
