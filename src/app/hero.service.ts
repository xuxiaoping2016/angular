import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Observable, of } from 'rxjs'
// import { HEROES } from './mock-heroes';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  // getHeroes(): Hero[] {
  //   return HEROES;
  // }

  // getHeroes(): Hero[] {
  //   setTimeout(() => HEROES,2000)
  // }
  private heroesUrl = 'api/heroes';

  getHeroes(): Observable<Hero[]> {
    this.log('fetched heroes');
    // return of(HEROES);
    return this.http.get<Hero[]>(this.heroesUrl)
  }

  getHero(id: number): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the hero
    // this.messageService.add(`HeroService: fetched hero id=${id}`);
    // return of(HEROES.find(hero => hero.id === id));
    return this.http.get<Hero[]>(this.heroesUrl)
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  constructor( 
    private http: HttpClient,
    private messageService: MessageService) { }
}
