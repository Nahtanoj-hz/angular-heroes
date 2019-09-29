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

  getHeroes(offset: number = 0, term: string = '') {
    const url  = this.makeUrl(`characters?limit=${environment.limit}`, offset, term);

    return this.httpClient.get(url);
  }

  private makeUrl(url: string, offset: number, term: string) {
    let newUrl: string = `${this.API}/${url}&apikey=${this.API_KEY}`;
    
    if (offset >= 0) {
      newUrl += `&offset=${offset}`;
    }
    
    if (term) {
      newUrl += `&nameStartsWith=${term}`;
    }

    return newUrl;
  }
}
