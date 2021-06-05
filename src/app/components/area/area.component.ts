import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {
  public sideA: string = '';
  public sideB: string = '';
  public sideC: string = '';
  public area: number = 0;
  constructor() { }
  ngOnInit(): void {
  }
  calc() {
    let a = parseInt(this.sideA);
    let b = parseInt(this.sideB);
    let c = parseInt(this.sideC);
    console.log(a + b + c);
    if (a + b > c && a + c > b && b + c > a) {
      let s = (a + b + c) / 2;
      this.area = Math.sqrt(s * (s - a) * (s - b) * (s - c))
    }
    else {
      alert('不是三角形!请重新输入!')
    }
  }
}