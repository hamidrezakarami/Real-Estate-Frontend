import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  homeList: {
    id: string;
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
      id: '1',
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
      id: '2',
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
      id: '3',
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
      id: '4',
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
      id: '5',
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
      id: '6',
      for: 'sale',
      img: './assets/06.jpg',
      topic: 'home',
      addr: 'here',
      price: 20,
      sqf: 200,
      bednum: 2,
      bathnum: 1,
    },
    {
      id: '1',
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
      id: '2',
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
      id: '3',
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
      id: '4',
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
      id: '5',
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
      id: '6',
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

  constructor(public sharedService: SharedService, public router: Router) {}

  ngOnInit(): void {}

  onClickMoreProperties(){

  }

  onClickCard(home) {
    console.log(home);
    this.router.navigate(['main/home/detail/' + home.id]);
  }
}
