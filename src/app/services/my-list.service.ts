import { Injectable, signal } from '@angular/core';
import { IItem } from '../components/item/item.interface';
import { HttpClient } from '@angular/common/http';
import * as convert from 'xml-js';

@Injectable({
  providedIn: 'root',
})
export class MyListService {
  private allItemsSignal = signal<IItem[]>([] as IItem[]);
  readonly allItems = this.allItemsSignal.asReadonly();

  private myListItemsSignal = signal<IItem[]>([] as IItem[]);
  readonly myListItems = this.myListItemsSignal.asReadonly();

  private totalPriceSignal = signal<number>(0);
  readonly totalPrice = this.totalPriceSignal.asReadonly();

  constructor(private http: HttpClient) {}

  parseXml(store: string , type: string, filename: string) {
    this.http
      .get(
        `/assets/priceLists/${store}/${type}/${filename}`,
        { responseType: 'text' }
      )
      .subscribe({
        next: (xml) => {
          const options = {
            ignoreComment: true,
            alwaysChildren: true,
            compact: true,
          };

          const result: any = convert.xml2js(xml, options);
          const items = result['root'].Items.Item.slice(0, 10);
          const itemsArr: IItem[] = items.map((item: any) => this.mapToItem(item));

          this.setAllItems(itemsArr);
        },
        error: (err) => {
          console.error('Failed to load XML file', err);
        },
      });
  }

  private mapToItem(item: any): IItem {
    return {
      itemCode: item.ItemCode?._text || '',
      itemName: item.ItemName?._text || '',
      itemType: item.ItemType?._text || '',
      itemStatus: item.ItemStatus?._text || undefined,
      itemPrice: item.ItemPrice?._text || '',
      manufactureCountry: item.ManufactureCountry?._text || undefined,
      manufacturerItemDescription: item.ManufacturerItemDescription?._text || undefined,
      allowDiscount: item.AllowDiscount?._text || undefined,
      qtyInPackage: item.QtyInPackage?._text || '',
      quantity: item.Quantity?._text || undefined,
      unitOfMeasure: item.UnitOfMeasure?._text || undefined,
      unitOfMeasurePrice: item.UnitOfMeasurePrice?._text || undefined,
      unitQty: item.UnitQty?._text || undefined,
      manufacturerName: item.ManufacturerName?._text || undefined,
      bIsWeighted: item.bIsWeighted?._text || undefined,
      priceUpdateDate: item.PriceUpdateDate?._text || undefined,
      image: '',
    };
  }  

  setAllItems(items: IItem[]) {
    this.allItemsSignal.set(items);
  }

  setMyListItems(items: IItem[]) {
    this.myListItemsSignal.update((prev) => {
      return [...prev, ...items];
    });
  }

  setTotalPrice(price: number) {
    this.totalPriceSignal.set(price);
  }
}
