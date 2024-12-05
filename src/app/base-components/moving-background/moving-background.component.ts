import { Component, signal } from '@angular/core';
import { ingridient } from './moving-background.interface';

@Component({
  selector: 'app-moving-background',
  standalone: true,
  imports: [],
  templateUrl: './moving-background.component.html',
  styleUrl: './moving-background.component.scss',
})
export class MovingBackgroundComponent {
  ingridients = signal<ingridient[]>([
    { src: 'assets/icons/ingridients/bottle.svg', name: 'bottle' },
    { src: 'assets/icons/ingridients/bread.svg', name: 'bread' },
    { src: 'assets/icons/ingridients/cabbage.svg', name: 'cabbage' },
    { src: 'assets/icons/ingridients/cauliflower.svg', name: 'cauliflower' },
    { src: 'assets/icons/ingridients/cheese.svg', name: 'cheese' },
    { src: 'assets/icons/ingridients/cherries.svg', name: 'cherries' },
    { src: 'assets/icons/ingridients/cookies.svg', name: 'cookies' },
    { src: 'assets/icons/ingridients/frappe.svg', name: 'frappe' },
    { src: 'assets/icons/ingridients/glass.svg', name: 'glass' },
    { src: 'assets/icons/ingridients/grapes.svg', name: 'grapes' },
    { src: 'assets/icons/ingridients/groceries.svg', name: 'groceries' },
    { src: 'assets/icons/ingridients/ham.svg', name: 'ham' },
    { src: 'assets/icons/ingridients/ice-cream.svg', name: 'ice-cream' },
    { src: 'assets/icons/ingridients/mustard.svg', name: 'mustard' },
    { src: 'assets/icons/ingridients/onion.svg', name: 'onion' },
    { src: 'assets/icons/ingridients/ornating.svg', name: 'ornating' },
    { src: 'assets/icons/ingridients/pizza.svg', name: 'pizza' },
    { src: 'assets/icons/ingridients/rice.svg', name: 'rice' },
    { src: 'assets/icons/ingridients/sandwich.svg', name: 'sandwich' },
    { src: 'assets/icons/ingridients/taco.svg', name: 'taco' },
  ]);

  constructor() {}

  getLoopedIngredients() {
    return [...this.ingridients(), ...this.ingridients()];
  }
}
