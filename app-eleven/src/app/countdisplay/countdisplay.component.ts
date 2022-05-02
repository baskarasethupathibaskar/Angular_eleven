import { Component, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'app-countdisplay',
  templateUrl: './countdisplay.component.html',
  styleUrls: ['./countdisplay.component.css']
})
export class CountdisplayComponent implements OnInit {

  @Input()
  count: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

}