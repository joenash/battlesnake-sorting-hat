import { Component, OnInit } from '@angular/core';
import { HouseInt, houses } from 'src/assets/data/Houses';

@Component({
  selector: 'app-hat',
  templateUrl: './hat.component.html',
  styleUrls: ['./hat.component.css'],
})
export class HatComponent implements OnInit {
  public sorted = false;
  public house: HouseInt | undefined;

  constructor() {}

  ngOnInit(): void {}

  sortIntoHouse(): void {
    // logic goes here
    const random = Math.floor(Math.random() * 1);

    this.house = houses[random];

    this.sorted = true;
  }

  reset(): void {
    this.sorted = false;
  }
}
