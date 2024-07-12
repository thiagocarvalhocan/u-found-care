import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-burger',
  standalone: true,
  imports: [],
  templateUrl: './burger.component.html',
  styleUrl: './burger.component.css'
})
export class BurgerComponent {
//menu burger
@Input() init: boolean | undefined;
@Output() opened = new EventEmitter<any>();

active = false;

ngOnInit() {
  this.active = this.init || false;
}

onBurgerClicked() {
  this.active = !this.active;
  this.opened.emit();
}
}
