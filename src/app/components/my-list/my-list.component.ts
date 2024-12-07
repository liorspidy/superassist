import { Component, computed, OnInit, signal } from '@angular/core';
import { ItemComponent } from '../item/item.component';
import { MyListService } from '../../services/my-list.service';
import { CommonModule } from '@angular/common';
import { IItem } from '../item/item.interface';
import { InputTextComponent } from "../../base-components/input-text/input-text.component";

@Component({
  selector: 'app-my-list',
  standalone: true,
  imports: [ItemComponent, CommonModule, InputTextComponent],
  templateUrl: './my-list.component.html',
  styleUrl: './my-list.component.scss',
})
export class MyListComponent implements OnInit {
  allItems = this.myListService.allItems;
  myListItems = this.myListService.myListItems;
  tableItems = signal<(IItem | null)[]>(new Array(10).fill(null));
  totalPrice = this.myListService.totalPrice;
  isSeachOpen = signal<boolean>(false);

  constructor(private myListService: MyListService) {}
  
  ngOnInit(): void {
    this.myListService.parseXml('shufersal','price','PriceFull7290027600007-018-202412060300');
  }

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
