import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromRoot from '../../store';
import { Book } from '../../models/book.model';
import { ConfigService } from '../../services/config.service';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  private selectedBook$: Observable<Book>;
  private selectedBook: Book;
  private showSave: boolean;

  constructor(private store: Store<fromRoot.State>, private config: ConfigService,
    private httpService: HttpService) {
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

  save() {
    this.httpService.saveSearchedLocations(this.selectedBook).subscribe();
  }

}
