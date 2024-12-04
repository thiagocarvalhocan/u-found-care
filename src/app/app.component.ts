import { Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})


export class AppComponent {

  }

