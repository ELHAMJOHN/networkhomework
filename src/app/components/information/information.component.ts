import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {
  public Students: any;
  constructor() {
    this.Students = [
      {
        name0: "陈凯歌",
        name1: "文宁",
        name2: "黄建新",
        name3: "黄渤",
        name4: "《前夜》"
      },
      {
        name0: "张一白",
        name1: "修梦迪",
        name2: "于冬",
        name3: "张泽",
        name4: "《相遇》"
      },
      {
        name0: "管虎",
        name1: "薛晓璐",
        name2: "江志强",
        name3: "吴京",
        name4: "《夺冠》"
      },
      {
        name0: "徐峥",
        name1: "何可可",
        name2: "王中军",
        name3: "杜江",
        name4: "《回归》"
      },
      {
        name0: "宁浩",
        name1: "徐峥",
        name2: "曾茂军",
        name3: "葛优",
        name4: "《北京你好》"
      }
    ]
  }
  ngOnInit(): void {
  }
}
