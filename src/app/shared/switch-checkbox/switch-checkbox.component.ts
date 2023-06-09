import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch-checkbox',
  templateUrl: './switch-checkbox.component.html',
  styleUrls: ['./switch-checkbox.component.scss']
})
export class SwitchCheckboxComponent implements OnInit  {
  public checkboxVal:boolean=true;
  @Input() heading:any;
  ngOnInit() {
    // this.onCheckboxClick(true);
  }
  onCheckboxClick(event:any){
    this.checkboxVal = event.target.checked;
  }
}
