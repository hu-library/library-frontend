import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { ConfigService } from 'src/app/services/config.service';
import * as fromRoot from '../../store';
import { Observable } from 'rxjs';
import { InventoryBook } from 'src/app/models/inventoryBook.model';
import searchLocations from 'src/app/config';
import { SearchLocation } from 'src/app/models/searchLocation.type';

@Component({
  selector: 'app-inventory-searching',
  templateUrl: './inventory-searching.component.html',
  styleUrls: ['./inventory-searching.component.scss']
})
export class InventorySearchingComponent implements OnInit {

  private book$: Observable<InventoryBook>;
  private searchedLocations$: Observable<Map<SearchLocation, boolean>>;
  private book: InventoryBook;
  private searchedLocations = new Map<SearchLocation, boolean>();
  private names = searchLocations;

  constructor(private store: Store<fromRoot.State>, private router: Router,
    private config: ConfigService, private http: HttpService) {
    this.book$ = store.select(fromRoot.getSelectedInventoryBook);
    
    this.searchedLocations$ = store.select(fromRoot.getSearchedLocations);
  }

  ngOnInit() {
    this.book$.subscribe(book => {
      if (!book) {
        this.router.navigateByUrl('/');
      } else {
        this.book = {
          ...book,
          callNumber: book.callNumber.replace(/-/g, ' ')
        }
      }
    });
    this.searchedLocations$.subscribe(locations => {
      if (locations) {
        this.searchedLocations = {...locations};
      }
    })
  }

  dateManipulation(date: string) {
    const year = date.substring(0, 4);
    const month = date.substring(5, date.indexOf('-', 5));
    const day = date.substring(date.lastIndexOf('-') + 1);
    return (`${month}/${day}/${year}`);
  }

}
