import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() toggleValue!:boolean;
  @Output() menu = new EventEmitter<any>();

  timeDate : any = new Date();
  constructor() {
    setInterval(() => {
      this.timeDate = new Date();
    }, 1);
}
}
