import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
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
  title: ButtonNames;

  private className: string;

  private textName: string;
  private buttonColor: string;
  private badgeColor: string;

  private books$: Observable<Book[]>;
  private books: Book[] = [];

  constructor(private store: Store<fromRoot.State>, private router: Router) {
    this.books$ = store.select(fromRoot.getAllBooks);
  }

  ngOnInit() {
    this.setUpCard();
    this.books$.subscribe(books => {
      for (const book of books) {
        if (this.checkStatus(book)) {
          this.books.push(book);
        }
      }
    });
  }

  private checkStatus(book: Book): boolean {
    if (book.searchStatus === 'Began searching' && this.title === 'Ongoing') {
      return true;
    } else if (book.searchStatus === 'Found' && this.title === 'Follow Up') {
      return true;
    } else if (book.searchStatus === 'Began searching' && this.title === 'Pending Investigation') {
      return true;
    } else if (book.searchStatus === 'Not searched for yet' && this.title === 'Requested By Patron') {
      return true;
    } else {
      return false;
    }
  }

  redirect(book: Book) {
    this.store.dispatch(new Actions.SelectBookAction(book));
    this.router.navigateByUrl('/' + book.title);
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