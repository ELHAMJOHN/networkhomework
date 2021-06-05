import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent implements OnInit {
  public color: any;
  constructor() {
    this.color = [];
  }
  ngOnInit(): void {
    setInterval(() => {
      this.createColor();
    }, 1000);
  }
  createColor() {
    let cc: any = [];
    let letters = '0123456789ABCDEF';
    for (let i = 0; i < 3; i++) {
      let c = '#';
      for (let j = 0; j < 6; j++) {
        c += letters[Math.floor(Math.random() * 16)]
      }
      cc.push(c);
    }
    console.log(cc);
    this.color = cc;
  }
}