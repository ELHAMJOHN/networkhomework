import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-register2',
  templateUrl: './register2.component.html',
  styleUrls: ['./register2.component.scss']
})
export class Register2Component implements OnInit {
  public username: any = '';
  public usercollege:any='';

  origins: any[] = [
    { value: "18", display: "18" },
    { value: "19", display: "19" },
    { value: "20", display: "20" },
    { value: "21", display: "21" },
    { value: "22", display: "22" },
    { value: "23", display: "23" },
    { value: "24", display: "24" },
    { value: "25", display: "25" },
  ];
  originss:any[]=[
    { value: "汉族", display: "汉族" },
    { value: "维族", display: "维族" },
  ];
  constructor(private storageService: StorageService) { }

  ngOnInit(): void {
  }
  onSubmit(form: any): void {
    console.log('you submitted value:', form);
    this.storageService.append(this.username);
  }
  orign: any;
  hobby: boolean = true;
  change(event: any) {
    console.log(event);
  }
}
