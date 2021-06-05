import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  public list: string[] = [];
  public list2:string[] = [];

  constructor() { }
  append(str: string) {
    this.list.push(str);
  }
  add(str2:string){
    this.list.push(str2);
  }
}
