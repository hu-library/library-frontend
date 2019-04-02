import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromRoot from '../../store';
import { Book } from '../../models/book.model';
import { ConfigService } from '../../services/config.service';
import { HttpService } from '../../services/http.service';
import { Router } from '@angular/router';
import * as Actions from '../../store/actions';
import { InventoryBook } from 'src/app/models/inventoryBook.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  private selectedBook$: Observable<Book>;
  private selectedBook: Book;
  private selectedInventoryBook$: Observable<InventoryBook>;
  private selectedInventoryBook: InventoryBook;
  private showSave: boolean;

  constructor(private store: Store<fromRoot.State>, private config: ConfigService,
    private httpService: HttpService, private router: Router) {
    this.selectedBook$ = store.select(fromRoot.getSelectedBook);
    this.selectedInventoryBook$ = store.select(fromRoot.getSelectedInventoryBook);
  }

  ngOnInit() {
    if (this.selectedBook$) {
      this.selectedBook$.subscribe(book => {
        this.selectedBook = book;
        if (book && book.searchedLocations) {
          this.showSave = this.config.checkMapForAnyTrue(book.searchedLocations);
        }
      });
    }
    if (this.selectedInventoryBook$) {
      this.selectedInventoryBook$.subscribe(book => {
        this.selectedInventoryBook = book;
        if (book && book.searchedLocations) {
          this.showSave = this.config.checkMapForAnyTrue(book.searchedLocations);
        }
      });
    }
  }

  save() {
    if (this.selectedBook) {
      this.httpService.saveSearchedLocations(this.selectedBook).subscribe();
    } else if (this.selectedInventoryBook) {
      this.httpService.saveSearchedInventoryLocations(this.selectedInventoryBook).subscribe();
    }
  }

  goHome() {
    if (this.selectedBook) {
      this.store.dispatch(new Actions.SelectBookAction());
    }
    if (this.selectedInventoryBook) {
      this.store.dispatch(new Actions.SelectInventoryBookAction());
    }
    this.router.navigateByUrl('/');
  }

}
