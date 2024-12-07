import { Component, signal } from '@angular/core';
import { InputTextComponent } from '../../../base-components/input-text/input-text.component';

@Component({
  selector: 'app-list-actions',
  standalone: true,
  imports: [InputTextComponent],
  templateUrl: './list-actions.component.html',
  styleUrl: './list-actions.component.scss'
})
export class ListActionsComponent {
  isSeachOpen = signal<boolean>(false);

  onAddToList() {
    console.log('add to list');
  }
  
  onRemoveFromList() {
    console.log('remove from list');
  }

  onSearchItem() {
    this.isSeachOpen.update(() => !this.isSeachOpen());
  }
}
