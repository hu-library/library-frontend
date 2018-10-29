import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

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

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.forEach((param: Params) => {
      this.card = param['card'];
      this.bookTitle = 'Book Title';
      this.author = 'Author';
      this.callNumber = 'Call Number';
      this.searchedPreviously = this.card === 'card' ? true : false;
    });
  }

}
