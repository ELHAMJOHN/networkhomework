import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temperature1',
  templateUrl: './temperature1.component.html',
  styleUrls: ['./temperature1.component.scss']
})
export class Temperature1Component implements OnInit {
  public tempC: any;
  public resultF: any;
  public tempF: any;
  public resultC: any;
  constructor() { 
    this.tempC = 0;
    this.resultF = 0;
    this.tempF = 0;
    this.resultC = 0;
  }
  ngOnInit(): void {
  }
  keyCtoF(): void {
    if (this.tempC != '') {
      this.resultF = this.tempC * 9 / 5 + 32;
    }
    else {
      alert('输入的数据不能为空！');
    }
  }
  keyFtoC(): void {
    if (this.tempF != '') {
      this.resultC = (this.tempF -32)*5/9 ;
    }
    else {
      alert('输入的数据不能为空！');
    }
  }
}
