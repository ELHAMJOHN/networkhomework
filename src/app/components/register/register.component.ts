import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public list: string[] = [];

  constructor(private sharedService: StorageService) {}

  ngOnInit(): void {
    this.list = this.sharedService.list;
  }
}


@Injectable({
  providedIn: 'root'
})
export class StorageService {
  public list: string[] = [];
  public list2: string[] = [];

  constructor() {}
  append(str: string) {
    this.list.push(str);
  }
  add(str2: string) {
    this.list.push(str2);
  }
}
