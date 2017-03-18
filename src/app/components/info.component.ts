import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-info',
  templateUrl: './info.component.html'
})
export class InfoComponent {
  infos:string[][] =[['Nombre de nacimiento','Aaron Hillel Swartz'],
  ['Nacimiento','8 de noviembre de 1986'],
  ['Lugar de nacimiento','Chicago, Estados Unidos'],
  ['Fallecimiento','11 de enero de 2013'],
  ['Causa de muerte','Suicidio por ahorcamiento'],
  ['Alma máter','Universidad Stanford'],
  ['Ocupación','Programador'],
  ['Distinciones','James Madison Award, EFF Pioneer Award, Salón de la Fama de Internet']
  ]
}