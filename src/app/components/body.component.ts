import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-body',
  templateUrl: './body.component.html'
})
export class BodyComponent {

  projects:string[][] = [['Creative Commons','Licencias de autor.'],
             ['Open Library.','Base de datos de libros colaborativa y de acceso público.'],
             ['RSS','Formato de fuente web.'],
             ['web.py','Una libreria de PYTHON.']]

}