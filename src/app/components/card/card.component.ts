import { Component, OnInit, Input } from '@angular/core';

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
  private buttonColor = 'btn-primary';
  constructor() { }

  ngOnInit() {
    this.className = this.title;
    while (this.className.includes(' ')) {
      this.className = this.className.replace(' ', '');
    }
    this.textName = this.className + 'Text';
    const random = Math.floor(Math.random() * Math.floor(3));
    console.log(random);
    this.buttonColor = this.random(random);
  }

  random(number: number): string {
    if (number === 0) {
      return 'btn-primary';
    } else if (number === 1) {
      return 'btn-info';
    } else if (number === 2) {
      return 'btn-success';
    } else if (number === 3) {
      return 'btn-warning';
    } else {
      console.log('fix random');
    }
  }
}
