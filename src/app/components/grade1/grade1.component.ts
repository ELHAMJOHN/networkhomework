import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grade1',
  templateUrl: './grade1.component.html',
  styleUrls: ['./grade1.component.scss']
})
export class Grade1Component implements OnInit {
  public score: number=0;
  public scoreInt: number=0;  
  constructor() { }
  ngOnInit(): void {
  }
  calc(): void {
    this.scoreInt = Math.floor(this.score / 10); 
  }
}
