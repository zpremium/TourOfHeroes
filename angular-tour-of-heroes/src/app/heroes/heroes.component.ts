import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
// import { HEROES } from '../mock-heroes'; |||||| se borra porque ya no la necesitamos, ya que ne su lugar implementaremos HeroService.
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  // heroes = HEROES; //Agrega una propiedad de heroes a la clase que expone a estos héroes para vincularlos. \\\\\ se ha comentado porque no la necesitaremos que ya lo estamos reemplanzando con el servicio Hero.
  

  constructor(private HeroService: HeroService) {}
  //El parámetro define simultáneamente una propiedad privada de heroService y la identifica como una instancia simple de HeroService. Cuando Angular crea HeroesComponent, el sistema de Inyección de Dependencia establece el parámetro heroService en la única instancia de HeroService.
  ngOnInit() {
    //después de crear la funcion getHeroes() la llamaremos en ngOnInit()
    this.getHeroes();
  }



  getHeroes(): void {
    //Crea una función para recuperar los héroes del servicio.
    this.HeroService.getHeroes()
    //El método HeroService.getHeroes para devolver Hero[]. Ahora devuelve Observable<Hero[]>. Vamos a tener que adaptar esta diferencia en HeroesComponent.
        .subscribe(heroes => this.heroes = heroes);
  }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.HeroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.HeroService.deleteHero(hero.id).subscribe();
  }


}

