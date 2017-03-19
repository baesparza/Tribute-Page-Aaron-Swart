import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  mostrar_body:boolean = true;
  mostrar_quote:boolean = false;
  mostrar_vid:boolean = false;
  mostrar_bio:boolean = false;

}
