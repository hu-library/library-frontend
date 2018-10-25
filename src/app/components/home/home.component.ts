import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) { }

  ngOnInit() {
  }
}
