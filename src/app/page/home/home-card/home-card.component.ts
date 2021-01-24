import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.scss'],
})
export class HomeCardComponent implements OnInit {
  @Input() for: string;
  @Input() img: string;
  @Input() topic: string;
  @Input() addr: string;
  @Input() price: string;
  @Input() sqf: number;
  @Input() bednum: number;
  @Input() bathnum: number;

  constructor() {}

  ngOnInit(): void {}
}
