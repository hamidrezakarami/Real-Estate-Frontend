import { Component, OnInit } from '@angular/core';
import { LabelType, Options } from 'ng5-slider';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  citys: { name: string; value: string }[] = [
    { name: 'Zanjan', value:"0" },
    { name: 'Tehran', value:"1" },
    { name: 'Tabriz', value:"2" },
    { name: 'Esfahan', value: "3" },
  ];

  // ///////////////// slider
  value: number = 40;
  highValue: number = 60;
  options: Options = {
    floor: 0,
    ceil: 500,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return '<b>Min price:</b> $' + value;
        case LabelType.High:
          return '<b>Max price:</b> $' + value;
        default:
          return '$' + value;
      }
    }
  };
  // ///////////////// slider 

  constructor() {}

  ngOnInit(): void {}
}
