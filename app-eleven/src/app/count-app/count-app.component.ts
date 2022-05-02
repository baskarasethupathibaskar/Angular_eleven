import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-count-app',
  templateUrl: './count-app.component.html',
  styleUrls: ['./count-app.component.css']
})
export class CountAppComponent implements OnInit {

  totalcount: number = 0;
  hitIncrementValue: number = 10;
  constructor() { }

  ngOnInit(): void {
  }

  increaseCount(value: number) {
    this.totalcount += value;
  }
}