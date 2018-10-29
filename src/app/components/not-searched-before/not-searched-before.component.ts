import { Component, OnInit } from '@angular/core';
import { Status } from '../../models/searchStatus.type';

@Component({
  selector: 'app-not-searched-before',
  templateUrl: './not-searched-before.component.html',
  styleUrls: ['./not-searched-before.component.scss']
})
export class NotSearchedBeforeComponent implements OnInit {

  private status: Status;
  private searchCount: number;
  private priority: 0|1|2|3|4|5|6|7|8|9|10;

  constructor() { }

  ngOnInit() {
    this.status = 'Found';
    this.searchCount = 3;
    this.priority = 4;
  }

}
