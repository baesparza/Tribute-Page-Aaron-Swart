import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-quote',
  templateUrl: './quote.component.html'
})
export class QuoteComponent {

  quotes:string[][] = [['"Aaron ha muerto. Nómadas de este loco mundo, hemos perdimos a un mentor, un viejo sabio. Hackers en busca de lo correcto, hemos perdido a uno de los nuestros. Cuidadores, escuchadores, padres todos, hemos perdido un hijo. Lloremos todos".','Tim Berners-Lee','Padre de la World Wide Web.'],
  ['"Aaron era un amigo muy querido para todos nosotros, y una inspiración para mí y para muchos de ustedes. Nuestras oraciones están con sus padres y los que supieron de su amor. Pero todo lo que construyamos sabrá siempre el producto de su genio".','Lawrence Lessig','creador e impulsor de la iniciativa Creative Commons.']];
}