import { Component, computed, OnInit, signal } from '@angular/core';
import { ItemComponent } from '../item/item.component';
import { MyListService } from '../../services/my-list.service';
import { CommonModule } from '@angular/common';
import { IItem } from '../item/item.interface';
import { ListActionsComponent } from "./list-actions/list-actions.component";
import { PaginationComponent } from "./pagination/pagination.component";
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-my-list',
  standalone: true,
  imports: [ItemComponent, CommonModule, ListActionsComponent, PaginationComponent],
  templateUrl: './my-list.component.html',
  styleUrl: './my-list.component.scss',
})
export class MyListComponent implements OnInit {
  allItems = this.myListService.allItems;
  // myListItems = this.myListService.myListItems;
  // tableItems = signal<(IItem | null)[]>(new Array(10).fill(null));
  totalPrice = this.myListService.totalPrice;

  constructor(private myListService: MyListService, private globalService: GlobalService) {}

  myListItems = computed(() => {
    return this.allItems().slice(0,15);
  })

  tableItems = computed(() => {
    const myListLength = this.myListItems().length;
    if(myListLength > 0) {
      return [...this.myListItems(), ...new Array(20 - myListLength).fill(null)];
    }
    return new Array(20).fill(null);
  })
  
  ngOnInit(): void {
    this.myListService.parseXml('shufersal','price','PriceFull7290027600007-018-202412060300');
  }
}
