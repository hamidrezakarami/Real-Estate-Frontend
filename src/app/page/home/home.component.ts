import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  panelOpenState: boolean = false;
  homeList: {
    for: string;
    img: string;
    topic: string;
    addr: string;
    price: number;
    sqf: number;
    bednum: number;
    bathnum: number;
  }[] = [
    {
      for: 'sale',
      img: './assets/01.jpg',
      topic: 'Comfortable Apartment in Palace',
      addr: 'here',
      price: 20,
      sqf: 200,
      bednum: 2,
      bathnum: 1,
    },
    {
      for: 'sale',
      img: './assets/02.jpg',
      topic: 'Comfortable Apartment in Palace',
      addr: 'here',
      price: 20,
      sqf: 200,
      bednum: 2,
      bathnum: 1,
    },
    {
      for: 'sale',
      img: './assets/03.jpg',
      topic: 'Comfortable Apartment in Palace',
      addr: 'here',
      price: 20,
      sqf: 200,
      bednum: 2,
      bathnum: 1,
    },
    {
      for: 'sale',
      img: './assets/04.jpg',
      topic: 'Comfortable Apartment in Palace',
      addr: 'here',
      price: 20,
      sqf: 200,
      bednum: 2,
      bathnum: 1,
    },
    {
      for: 'sale',
      img: './assets/05.jpg',
      topic: 'Comfortable Apartment in Palace',
      addr: 'here',
      price: 20,
      sqf: 200,
      bednum: 2,
      bathnum: 1,
    },
    {
      for: 'sale',
      img: './assets/06.jpg',
      topic: 'home',
      addr: 'here',
      price: 20,
      sqf: 200,
      bednum: 2,
      bathnum: 1,
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  clickOn_card(home) {
    console.log(home);
  }
  hamid_btn() {
    this.panelOpenState = !this.panelOpenState;
  }
}
