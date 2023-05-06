import { Component, OnInit, ViewChild } from '@angular/core';
import { MatRadioButton } from '@angular/material/radio';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { conductorService } from 'src/app/service/conductor.service';
import { conductor } from 'src/model/conductor';

@Component({
  selector: 'app-inicio-reclut',
  templateUrl: './inicio-reclut.component.html',
  styleUrls: ['./inicio-reclut.component.css'],
})
export class InicioReclutComponent implements OnInit {
  conductores: conductor[] = [];
  public licenseType: string = '';
  public selectedValue: any = "1";
  @ViewChild(MatRadioButton) radio: MatRadioButton;

  constructor(
    private conductorService: conductorService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.conductorService.listDrivers().subscribe((data) => {
      this.conductores = data;
      console.log(this.conductores);
    });
  }
}
