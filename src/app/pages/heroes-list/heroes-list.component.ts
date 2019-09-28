import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { HeroesService } from '../../shared/services/heroes.service';
import { Subscription } from 'rxjs';
import { IHero, IHeroesList } from '../../shared/interfaces/heroes.interface';

import { environment } from 'src/environments/environment';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'jhz-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss']
})
export class HeroesListComponent implements OnInit, OnDestroy {
  heroes: IHero[];
  heroesSubscription: Subscription;
  pageSize: number = environment.limit;
  totalResults: number;

  constructor(private heroesService: HeroesService) { }

  ngOnInit() {
    this.loadHeroes();
  }

  ngOnDestroy() {
    this.heroesSubscription.unsubscribe();
  }

  loadHeroes(offset: number = 0) {
    this.heroesSubscription = this.heroesService.getHeroes(offset)
    .subscribe((response: IHeroesList) => {
      this.heroes = response.data.results;
      this.totalResults = response.data.total;
    });
  }

  onPage(pageEvent: PageEvent) {
    let offset: number = 0;

    if (pageEvent.pageIndex > 0) {
      offset = pageEvent.pageIndex * this.pageSize;
    }

    this.loadHeroes(offset);
  }
}
