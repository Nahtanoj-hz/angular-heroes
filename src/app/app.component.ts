import { Component, OnInit, OnDestroy } from '@angular/core';
import { HeroesService } from './shared/services/heroes.service';
import { Observable, Subscription } from 'rxjs';
import { IHero, IHeroesList } from './shared/interfaces/heroes.interface';

@Component({
  selector: 'jhz-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  heroes: IHero[];
  heroesSubscription: Subscription;

  constructor(private heroesService: HeroesService) {
  }

  ngOnInit() {
    this.heroesSubscription = this.heroesService.getHeroes()
    .subscribe((response: IHeroesList) => {
      this.heroes = response.data.results;
    });
  }

  ngOnDestroy() {
    this.heroesSubscription.unsubscribe();
  }
}
