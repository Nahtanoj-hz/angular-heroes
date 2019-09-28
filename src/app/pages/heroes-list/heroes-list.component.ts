import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { HeroesService } from '../../shared/services/heroes.service';
import { Subscription } from 'rxjs';
import { IHero, IHeroesList } from '../../shared/interfaces/heroes.interface';

@Component({
  selector: 'jhz-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss']
})
export class HeroesListComponent implements OnInit, OnDestroy {
  heroes: IHero[];
  heroesSubscription: Subscription;

  constructor(private heroesService: HeroesService) { }

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
