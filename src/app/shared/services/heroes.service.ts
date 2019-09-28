import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  API = environment.api;
  API_KEY = environment.apiKey;

  constructor(private httpClient: HttpClient) { }

  getHeroes() {
    const url  = this.makeUrl('characters?limit=100');

    return this.httpClient.get(url);
  }

  private makeUrl(url: string) {
    return `${this.API}/${url}&apikey=${this.API_KEY}`;
  }
}
