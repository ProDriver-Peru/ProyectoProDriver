import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { conductorService } from 'src/app/service/conductor.service';
import { conductor } from 'src/model/conductor';

@Component({
  selector: 'app-inicio-reclut',
  templateUrl: './inicio-reclut.component.html',
  styleUrls: ['./inicio-reclut.component.css']
})
export class InicioReclutComponent implements OnInit {

  lista:conductor[]=[];
  displayedColumns = ['name','lastName','license','descripcion'];
  dataSource = new MatTableDataSource<conductor>();

  @ViewChild(MatPaginator) paginator : MatPaginator;
  @ViewChild(MatSort) sort : MatSort;

  constructor(private conductorService: conductorService, private router:Router){}

  ngOnInit(): void {
    this.conductorService.listDrivers().subscribe(data=>{
      this.dataSource.data=data;
    })
  }

  ngAfterViewInit(){  //dsp q la pagina esta cargada recomeinda material asignar estos valoers
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  filtrar(e:any){
    this.dataSource.filter=e.target.value.trim();
  }

}
