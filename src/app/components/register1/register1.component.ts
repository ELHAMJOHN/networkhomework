import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-register1',
  templateUrl: './register1.component.html',
  styleUrls: ['./register1.component.scss']
})
export class Register1Component implements OnInit {
  public username: string = '请输入用户名';
  public password: string = '请输入密码';
  public password2: string = '请确认密码';

  constructor() { }

  ngOnInit(): void {
  }
  register() {
    if (this.password == this.password2) {
      alert('您已成功注册！')
    }
    else {
      alert('两次输入不一致，请重新输入。');
      this.username = ''; this.password = ''; this.password2 = '';
    }
  }
}
