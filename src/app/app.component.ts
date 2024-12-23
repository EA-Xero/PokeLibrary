import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './Componentes/header/header.component';
import { InputComponent } from './Componentes/input/input.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent,InputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'pokelibrary';
}