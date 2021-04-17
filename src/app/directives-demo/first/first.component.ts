import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent implements OnInit {
  onlyOdd: boolean = false;
  // numbers: Array<number> = [1, 2, 3, 4, 5];
  oddNumbers: Array<number> = [1, 3, 5];
  evenNumbers: Array<number> = [2, 4];

  value = 10;
  constructor() {}

  ngOnInit(): void {}
}
