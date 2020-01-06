import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ceshi',
  templateUrl: './ceshi.component.html',
  styleUrls: ['./ceshi.component.css']
})
export class CeshiComponent implements OnInit {
  isUnchanged:boolean = false;
  sp:number = 2;
  badCurly:string =''
  size:number = 12;
  constructor() { }

  ngOnInit() {
  }
  toggle(){
    this.isUnchanged = !this.isUnchanged;
    this.badCurly = !this.badCurly ? 'now' : ''
  }

  saveSize(s){
    this.size = s;
  }

  callPhone(val){
    console.log(val)
  }
}
