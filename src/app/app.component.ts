import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import Api from '../APIREST/llamadas-Api';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'pokelibrary';
}
//Api.Pokemons().then(data => console.log(data));