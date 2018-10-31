import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../store';
import { Observable } from 'rxjs';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-search-view',
  templateUrl: './search-view.component.html',
  styleUrls: ['./search-view.component.scss']
})
export class SearchViewComponent implements OnInit {

  private card: string;
  public bookTitle: string;
  public author: string;
  public callNumber: string;
  private searchedPreviously: boolean;

  private selectedBook$: Observable<Book>;
  private book: Book;

  constructor(private store: Store<fromRoot.State>, private route: ActivatedRoute) {
    this.selectedBook$ = store.select(fromRoot.getSelectedBook);
  }

  ngOnInit() {
    this.selectedBook$.subscribe(book => {
      if (book === null) {
        this.book = book;
      } else {
        this.book = JSON.parse(localStorage.getItem('selectedBook'));
      }
    });
    this.route.params.forEach((param: Params) => {
      this.card = param['card'];
      this.bookTitle = 'Book Title';
      this.author = 'Author';
      this.callNumber = 'Call Number';
      this.searchedPreviously = this.card === 'card' ? true : false;
    });
  }

}
