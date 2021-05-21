import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {}

  //Define una propiedad heroes al array.
  // El constructor espera que Angular lo inyecte HeroService en una propiedad heroServiceprivada.
  // El hook ngOnInit() del ciclo de vida llama a getHeroes.

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService
      .getHeroes()
      .subscribe((heroes) => (this.heroes = heroes.slice(1, 5)));
    //getHeroes devuelve la lista de héroes divididos en las posiciones 1 y 5, devolviendo sólo cuatro de los Héroes principales (2º, 3º, 4º, y 5º).
  }
}
