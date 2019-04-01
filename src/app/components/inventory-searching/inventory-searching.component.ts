import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { ConfigService } from 'src/app/services/config.service';
import * as fromRoot from '../../store';
import { Observable } from 'rxjs';
import { InventoryBook } from 'src/app/models/inventoryBook.model';

@Component({
  selector: 'app-inventory-searching',
  templateUrl: './inventory-searching.component.html',
  styleUrls: ['./inventory-searching.component.scss']
})
export class InventorySearchingComponent implements OnInit {

  private book$: Observable<InventoryBook>;
  private book: InventoryBook;

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
    });
  }

  dateManipulation(date: string) {
    const year = date.substring(0, 4);
    const month = date.substring(5, date.indexOf('-', 5));
    const day = date.substring(date.lastIndexOf('-') + 1);
    return (`${month}/${day}/${year}`);
  }

}
