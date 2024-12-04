import { Component } from '@angular/core';
import { FooterComponent } from "../../components/footer/footer.component";
import { MenuComponent } from "../../components/menu/menu.component";
import { ContactComponent } from "../../components/contact/contact.component";
import { TheAppComponent } from "../../components/the-app/the-app.component";
import { ProvideComponent } from "../../components/provide/provide.component";
import { FindComponent } from "../../components/find/find.component";
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';
import {RouterLink} from '@angular/router'

@Component({
    selector: 'app-home',
    imports: [RouterLink, FooterComponent, MenuComponent, ContactComponent, TheAppComponent, ProvideComponent, FindComponent, TestimonialsComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent {

}
