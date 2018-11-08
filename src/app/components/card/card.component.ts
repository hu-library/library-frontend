import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, from } from 'rxjs';
import * as fromRoot from '../../store';
import { Book } from '../../models/book.model';
import { ButtonNames } from '../../models/buttonName.type';
import { Router } from '@angular/router';
import * as Actions from '../../store/actions';

enum Colors {
  'primary', // dark blue
  'info', // light blue
  'success', // green
  'warning' // yellow
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
  title: string;

  private className: string;

  private textName: string;
  private buttonColor: string;
  private badgeColor: string;

  private books$: Observable<Book[]>;
  private books: Book[] = [];

  constructor(private store: Store<fromRoot.State>, private router: Router) {}

  ngOnInit() {
    this.setUpCard();
    if (this.title) {
      switch (this.title) {
        case 'Requested By Patron':
          this.books$ = this.store.select(fromRoot.getRequestedByPatronBooks);
          this.buttonColor = 'btn-info';
          this.badgeColor = 'badge-primary';
          break;
        case 'Ongoing':
          this.books$ = this.store.select(fromRoot.getOngoingBooks);
          this.buttonColor = 'btn-primary';
          this.badgeColor = 'badge-success';
          break;
        case 'Inventory':
          this.books$ = this.store.select(fromRoot.getInventoryBooks);
          this.buttonColor = 'btn-info';
          this.badgeColor = 'badge-primary';
          break;
        case 'Follow Up':
          this.books$ = this.store.select(fromRoot.getFollowUpBooks);
          this.buttonColor = 'btn-primary';
          this.badgeColor = 'badge-success';
          break;
      }
    }
    this.books$.subscribe(books => this.books = books);
  }

  redirect(book: Book) {
    this.store.dispatch(new Actions.SelectBookAction(book));
    this.router.navigateByUrl('/' + book.urlID);
  }

  private setUpCard() {
    const title = this.title;
    this.className = title.replace(/\s+/g, '');
    this.textName = this.className + 'Text';
  }
}
