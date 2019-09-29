import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';

import { environment } from 'src/environments/environment';

import { HeroesService } from '../../shared/services/heroes.service';
import { IHero, IHeroesList } from '../../shared/interfaces/heroes.interface';

@Component({
  selector: 'jhz-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss']
})
export class HeroesListComponent implements OnInit, OnDestroy {
  form: FormGroup;
  heroes: IHero[];
  heroesSubscription: Subscription;
  pageSize: number = environment.limit;
  term: string;
  totalResults: number;

  constructor(private heroesService: HeroesService, private formBuilder: FormBuilder,) { }

  clear() {
    this.form.get('term').setValue('');
    this.term = '';

    this.loadHeroes();
  }

  loadHeroes(offset: number = 0, term: string = '') {
    this.heroesSubscription = this.heroesService.getHeroes(offset, term)
    .subscribe((response: IHeroesList) => {
      this.heroes = response.data.results;
      this.totalResults = response.data.total;
    });
  }

  ngOnInit() {
    this.loadHeroes();

    this.form = this.formBuilder.group({
      term: ['']
    });
  }

  ngOnDestroy() {
    this.heroesSubscription.unsubscribe();
  }

  onPage(pageEvent: PageEvent) {
    let offset: number = 0;

    if (pageEvent.pageIndex > 0) {
      offset = pageEvent.pageIndex * this.pageSize;
    }

    this.loadHeroes(offset, this.term);
  }

  search() {
    setTimeout(() => {
      this.term = this.form.get('term').value;
      
      this.loadHeroes(0, this.term);
    }, 500);
  }
}
