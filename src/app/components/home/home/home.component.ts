import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Pokemon } from '../../../models/pokemon';
import {  Pokemons } from "../../pokemon/pokemons.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, Pokemons],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
