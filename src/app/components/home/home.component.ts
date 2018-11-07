import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { HttpService } from '../../services/http.service';
import * as fromRoot from '../../store';
import * as Actions from '../../store/actions';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private buttonNames = [
    'Requested By Patron',
    'Ongoing',
    'Inventory',
    'Follow Up'
  ];
  private allBooks$: Observable<Book[]>;

  constructor(private httpService: HttpService, private store: Store<fromRoot.State>) {
    this.allBooks$ = store.select(fromRoot.getAllBooks);
  }

  ngOnInit() {
    this.allBooks$.subscribe(books => {
      if (books.length === 0) {
        this.httpService.getAllData().subscribe(res => {
          this.store.dispatch(new Actions.AddBookBulkAction(res));
        });
      }
    });
  }
}
