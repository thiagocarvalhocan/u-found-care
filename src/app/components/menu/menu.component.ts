import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { Router }          from '@angular/router'; //implementing Constructor(private router: Router) 


@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink, RouterOutlet, CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit{
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
