export class Pokemon {
  name: string;
  id: number;
  sprites: {
    front_default: string;
  };
  types: { type: { name: string } }[];
  description: string;
  flavor_text_entries: { flavor_text: string; language: { name: string } }[];

  constructor(pokemonResponse?: any) {
    this.name = pokemonResponse?.name || '';
    this.id = pokemonResponse?.id || 0;
    this.sprites = pokemonResponse?.sprites || { front_default: '' };
    this.types = pokemonResponse?.types || [];
    this.flavor_text_entries = pokemonResponse?.flavor_text_entries || [];
    this.description = '';
  }
}
