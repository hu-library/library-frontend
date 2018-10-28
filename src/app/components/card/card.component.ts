import { Component, OnInit, Input } from '@angular/core';

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

  // used in html
  textName: string;
  buttonColor: string;
  badgeColor: string;

  constructor() { }

  ngOnInit() {
    this.className = this.title;
    while (this.className.includes(' ')) {
      this.className = this.className.replace(' ', '');
    }
    this.textName = this.className + 'Text';
    const random = Math.floor(Math.random() * Math.floor(3));

    const color = this.random(random);
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
