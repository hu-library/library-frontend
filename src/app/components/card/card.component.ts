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
        case 'Follow Up':
          this.books$ = this.store.select(fromRoot.getFollowUpBooks);
          break;
        case 'Inventory':
          this.books$ = this.store.select(fromRoot.getInventoryBooks);
          break;
        case 'Ongoing':
          this.books$ = this.store.select(fromRoot.getOngoingBooks);
          break;
        case 'Pending Investigation':
          this.books$ = this.store.select(fromRoot.getPendingInvestigationBooks);
          break;
        case 'Requested By Patron':
          this.books$ = this.store.select(fromRoot.getRequestedByPatronBooks);
          break;
      }
    }
    this.books$.subscribe(books => this.books = books);
  }

  redirect(book: Book) {
    this.store.dispatch(new Actions.SelectBookAction(book));
    this.router.navigateByUrl('/' + book.urlID);
  }

  // #region setUp
  private setUpCard() {
    this.className = this.title;
    while (this.className.includes(' ')) {
      this.className = this.className.replace(' ', '');
    }
    this.textName = this.className + 'Text';
    const color = this.randomColor(Math.floor(Math.random() * Math.floor(3)));
    this.buttonColor = 'btn-' + Colors[color];
    this.badgeColor = 'badge-';
    if (color === Colors.info) {
      this.badgeColor += Colors[Colors.primary];
    } else if (color === Colors.primary) {
      this.badgeColor += Colors[Colors.info];
    } else if (color === Colors.success) {
      this.badgeColor += Colors[Colors.warning];
    } else if (color === Colors.warning) {
      this.badgeColor += Colors[Colors.success];
    }
  }

  randomColor(number: number): Colors {
    if (number === 0) {
      return Colors.primary;
    } else if (number === 1) {
      return Colors.info;
    } else if (number === 2) {
      return Colors.success;
    } else if (number === 3) {
      return Colors.warning;
    }
  }
  // #endregion
}
