import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-app-sizer',
  template: `
  <div>
    <button (click)="dec()" title="smaller">-</button>
    <button (click)="inc()" title="bigger">+</button>
    <label [style.font-size.px]="size">FontSize: {{size}}px</label>
  </div>`,
  styleUrls: ['./app-sizer.component.css']
})
export class AppSizerComponent implements OnInit {

  constructor() { }
  @Input()  size: number | string = 0;
  @Output() sizeChange = new EventEmitter<number>();
 
  dec() { this.resize(-1); }
  inc() { this.resize(+1); }
 
  resize(delta: number) {
    this.size = Math.min(40, Math.max(8, +this.size + delta));
    this.sizeChange.emit(this.size);
  }

  ngOnInit() {
  }

}
