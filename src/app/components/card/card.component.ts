import { Component, OnInit, Input } from '@angular/core';

enum Colors {
  'primary',
  'info',
  'success',
  'warning'
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
  constructor() { }

  ngOnInit() {
    this.className = this.title;
    while (this.className.includes(' ')) {
      this.className = this.className.replace(' ', '');
    }
    this.textName = this.className + 'Text';
    const random = Math.floor(Math.random() * Math.floor(3));
    console.log(random);
    const color = this.random(random);
    this.buttonColor = 'btn-' + Colors[color];
    if (color > 0) {
      this.badgeColor = 'badge-' + Colors[color - 1];
    } else {
      this.badgeColor = 'badge-' + Colors[Colors.warning];
    }
  }

  random(number: number): Colors {
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
}
