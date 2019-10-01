import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/shared/services/heroes.service';
import { ActivatedRoute } from '@angular/router';
import { IHero, IHeroesList } from 'src/app/shared/interfaces/heroes.interface';

@Component({
  selector: 'jhz-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.scss']
})
export class HeroDetailsComponent implements OnInit {
  hero: IHero;

  constructor(private heroesService: HeroesService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id: string = this.route.snapshot.params.id;
    if (id) {
      this.heroesService.getHero(+id)
      .subscribe((heroesList: IHeroesList) => {
        this.hero = heroesList.data.results[0];
      });
    }
  }

}
