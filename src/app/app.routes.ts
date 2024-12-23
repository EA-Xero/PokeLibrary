import { Routes } from '@angular/router';
import { PokemonsComponent } from './Rutas/pokemons/pokemons.component';
import { NotFoundComponent } from './Rutas/not-found/not-found.component';
import { MovesComponent } from './Rutas/moves/moves.component';
import { BerriesComponent } from './Rutas/berries/berries.component';
import { LocationsComponent } from './Rutas/locations/locations.component';
import { AbilitiesComponent } from './Rutas/abilities/abilities.component';
export const routes: Routes = [
    {
        path: '', redirectTo: 'Pokemon', pathMatch: 'full'
    },
    {
        path: 'Pokemons',component: PokemonsComponent
    },
    {
        path: 'Abilites',component: AbilitiesComponent
    },
    {
        path: 'Locations',component: LocationsComponent
    },
    {
        path: 'Berries',component: BerriesComponent
    },
    {
        path: 'Moves',component: MovesComponent
    },
    {
        path: '**',component: NotFoundComponent
    }
];
