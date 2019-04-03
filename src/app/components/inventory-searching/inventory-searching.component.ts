import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { ConfigService } from '../../services/config.service';
import * as fromRoot from '../../store';
import { Observable } from 'rxjs';
import { InventoryBook } from '../../models/inventoryBook.model';
import searchLocations from '../../config';


@Component({
  selector: 'app-inventory-searching',
  templateUrl: './inventory-searching.component.html',
  styleUrls: ['./inventory-searching.component.scss']
})
export class InventorySearchingComponent implements OnInit {

  private book$: Observable<InventoryBook>;
  private book: InventoryBook;
  private names = searchLocations;
  private allChecked: boolean;

  constructor(private store: Store<fromRoot.State>, private router: Router,
    private config: ConfigService, private http: HttpService) {
    this.book$ = store.select(fromRoot.getSelectedInventoryBook);
  }

  ngOnInit() {
    this.book$.subscribe(book => {
      if (!book) {
        this.router.navigateByUrl('/');
      }
      this.book = book;
      if (book && book.searchedLocations) {
        this.allChecked = this.config.checkMapForAllTrue(book.searchedLocations);
      }
    });
  }

  dateManipulation(date: string) {
    const year = date.substring(0, 4);
    const month = date.substring(5, date.indexOf('-', 5));
    const day = date.substring(date.lastIndexOf('-') + 1);
    return (`${month}/${day}/${year}`);
  }

  found() {
    this.http.foundInventoryBook(this.book, 'Found');
  }

  stopSearching() {
    this.http.saveInventoryBookIsMissing(this.book);
    this.http.foundInventoryBook(this.book, 'Missing');
  }

}
