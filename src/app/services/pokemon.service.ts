import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Pokemon } from '../models/pokemon';
import { PokemonListResponse } from '../models/carts-response'; 

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http: HttpClient) {}

  getPokemons(url: string): Observable<PokemonListResponse> {
    return this.http.get<PokemonListResponse>(url);
  }
  getPokemon(name: string): Observable<Pokemon> {
    return this.http.get(`${this.apiUrl}${name}`).pipe(
      map((response: any) => new Pokemon(response))
    );
  }

  getPokemonByUrl(url: string): Observable<Pokemon> {
    return this.http.get(url).pipe(
      switchMap((pokemonResponse: any) => {
        return this.http.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemonResponse.id}`).pipe(
          map((speciesResponse: any) => {
            const pokemon = new Pokemon(pokemonResponse);
            const spanishDescription = speciesResponse.flavor_text_entries.find(
              (entry: any) => entry.language.name === 'es' 
            );
            pokemon.description = spanishDescription
              ? spanishDescription.flavor_text
              : 'No description available.';
            return pokemon;
          })
        );
      })
    );
  }

  
}
