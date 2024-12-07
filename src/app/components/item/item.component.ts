import { Component, Host, HostBinding, input } from '@angular/core';
import { IItem } from './item.interface';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss',
})
export class ItemComponent {
  itemData = input<IItem>();

}
