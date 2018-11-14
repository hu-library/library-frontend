import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../store';
import { Observable } from 'rxjs';
import { Book } from 'src/app/models/book.model';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  private selectedBook$: Observable<Book>;
  private selectedBook: Book;
  private showSave: boolean;

  constructor(private store: Store<fromRoot.State>, private config: ConfigService) {
    this.selectedBook$ = store.select(fromRoot.getSelectedBook);
  }

  ngOnInit() {
    this.selectedBook$.subscribe(book => {
      this.selectedBook = book;
      if (book && book.searchedLocations) {
        this.showSave = this.config.checkMapForAnyTrue(book.searchedLocations);
      }
    });
  }

}
