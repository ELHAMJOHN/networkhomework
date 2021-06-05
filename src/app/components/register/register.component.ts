import { Component, OnInit } from '@angular/core';
import { StorageService} from 'src/app/services/storage.service'


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
 
  public list:string[]=[];
 
  constructor(private sharedService: StorageService) { }

  ngOnInit(): void {
    
    this.list = this.sharedService.list;
  }
}
