import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../store';
import * as Actions from '../../store/actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private readonly buttonNames = [
    'Requested By Patron',
    'Ongoing',
    'Pending Investigation',
    'Inventory',
    'Follow Up'
  ];

  constructor(private router: Router, private httpService: HttpService,
    private store: Store<fromRoot.State>) {}

  ngOnInit() {
    this.httpService.getAllData().subscribe(res => {
      this.store.dispatch(new Actions.AddBookBulkAction(res));
    });
  }
}
