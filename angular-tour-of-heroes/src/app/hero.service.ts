// En esta lección, crearemos un HeroService donde toda las vistas de la aplicación podrán usar para obtener héroes.
// Los servicios son una excelente manera de compartir información entre cases que no se conocen entre sí.
// Cuando proporcionamos el servicio en la raíz, Angular crea una única instancia compartida de HeroService e inyecta en cualquier clase que lo solicite.
import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  // El decorador @Injectable() acepta metadatos ("root") del objeto del servicio, de la misma manera que con el decorador @Component() que hicimos para la clase de componentes.
  providedIn: 'root',
})
export class HeroService {
  constructor(private MessageService: MessageService) {
    //Angular inyectará el singleton MessageServiceen esa propiedad cuando cree HeroService. "servicio en servicio"
  }

  //REEMPLAZAMOS ESTA FUNCIÓN POR LA DE ABAJO CON EL OBSERVABLE
  // getHeroes(): Hero[] {
  //   return HEROES;
  // }

  getHeroes(): Observable<Hero[]> {
    //Modifica el método getHeroes par aenvíar un mensaje cuando se vaya a buscar a los héroes.
    //of(Heroes) devuelve un Observable<Hero[]> que emite un único valor, la matriz de héroes simulados.
    this.MessageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
}
