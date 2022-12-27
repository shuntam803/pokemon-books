import { Component, OnInit } from '@angular/core';
import { POKEMONS } from '../models/pokemons';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  // ポケモンのリストを定数でセット
  pokemons = POKEMONS;

  constractor() { }

  ngOnInit() {

  }

}
