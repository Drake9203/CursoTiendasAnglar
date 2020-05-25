import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  titles = 'Richard';

  items = ['richard', 'dayana', 'duque'];

  power = 10;
  constructor() { }

  ngOnInit(): void {
  }

  addItem() {
    this.items.push('nuevo');
  }

  deletItem(index: number) {
    this.items.splice(index, 1);
  }
}
