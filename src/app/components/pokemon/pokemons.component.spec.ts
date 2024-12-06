import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pokemons } from './pokemons.component';

describe('PokemonsComponent', () => {
  let component: Pokemons;
  let fixture: ComponentFixture<Pokemons>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Pokemons], // Usa 'declarations' para declarar el componente
    }).compileComponents();

    fixture = TestBed.createComponent(Pokemons);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
