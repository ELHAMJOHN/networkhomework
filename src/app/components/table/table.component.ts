import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  public arr: number[];
  public aro:number[];
  constructor() {
    this.arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    this.aro = [9, 8, 7, 6, 5, 4, 3, 2, 1];
  }
  ngOnInit(): void {
  }
}