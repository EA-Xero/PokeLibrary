import { Routes } from '@angular/router';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { NotFoundComponent } from './not-found/not-found.component';
export const routes: Routes = [
    {
        path: '', redirectTo: 'Pokemon', pathMatch: 'full'
    },
    {
        path: 'Pokemon',component: PokemonsComponent
    },
    {
        path: '**',component: NotFoundComponent
    }
];
