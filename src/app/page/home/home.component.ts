import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
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
      img: '../../../assets/download.jpg',
      topic: 'Comfortable Apartment in Palace',
      addr: 'here',
      price: 20,
      sqf: 200,
      bednum: 2,
      bathnum: 1,
    },
    {
      for: 'sale',
      img: '../../../../../assets/download.jpg',
      topic: 'Comfortable Apartment in Palace',
      addr: 'here',
      price: 20,
      sqf: 200,
      bednum: 2,
      bathnum: 1,
    },
    {
      for: 'sale',
      img: '../../assets/download.jpg',
      topic: 'Comfortable Apartment in Palace',
      addr: 'here',
      price: 20,
      sqf: 200,
      bednum: 2,
      bathnum: 1,
    },
    {
      for: 'sale',
      img: '../../../../../../assets/download.jpg',
      topic: 'Comfortable Apartment in Palace',
      addr: 'here',
      price: 20,
      sqf: 200,
      bednum: 2,
      bathnum: 1,
    },
    {
      for: 'sale',
      img: './assets/download.jpg',
      topic: 'Comfortable Apartment in Palace',
      addr: 'here',
      price: 20,
      sqf: 200,
      bednum: 2,
      bathnum: 1,
    },
    {
      for: 'sale',
      img: '../../../../assets/download.jpg',
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
}