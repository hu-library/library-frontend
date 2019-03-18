import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';
import { InventoryBook } from '../models/inventoryBook.model';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }

  checkMapForAllTrue(map: Map<any, any>) {
    let result = true;
    map.forEach((val) => {
      if (val === false) {
        result = false;
        return;
      }
    });
    return result;
  }

  checkMapForAnyTrue(map: Map<any, any>) {
    let result = false;
    map.forEach((val) => {
      if (val === true) { result = true; return; }
    });
    return result;
  }

  isBook(book: Book | InventoryBook): book is Book {
    return 'markedLostBelievedReturned' in book;
  }
}
