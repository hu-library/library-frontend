import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  requestedByPatron() {
    this.router.navigateByUrl('/list/requested-by-patron');
  }

  ongoing() {
    this.router.navigateByUrl('/list/ongoing');
  }

  pendingInvestigation() {
    this.router.navigateByUrl('/list/pending-investigation');
  }

  inventory() {
    this.router.navigateByUrl('/list/inventory');
  }

  followUp() {
    this.router.navigateByUrl('/list/follow-up');
  }
}
