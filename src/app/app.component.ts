import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { BurgerComponent } from "./components/burger/burger.component";
import { CommonModule } from '@angular/common';
import { Router }          from '@angular/router'; //implementing Constructor(private router: Router) 



@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HomeComponent, FooterComponent, BurgerComponent, CommonModule, RouterLink]
})


export class AppComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}
  

  ngOnInit() { 
    this.activatedRoute.fragment.subscribe((fragment: string | null) => {
      if (fragment) this.jumpToSection(fragment);
    });
  }

  jumpToSection(section: string | null) {
    if (section) document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' }); //setting the scroll behavior
    //reset the url 
    if (section === "top"){
      this.router.navigate(['']);
    }
  }


/* scroll(el: HTMLElement) {
    el.scrollIntoView();

} */
  title = 'tailwind-project';
  isActive =  false;//mostra ou nao menu

  closeMenu(){
    this.isActive = !this.isActive;
  }
  
}

