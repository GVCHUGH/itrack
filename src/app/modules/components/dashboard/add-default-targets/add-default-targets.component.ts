import { Component } from '@angular/core';

@Component({
  selector: 'app-add-default-targets',
  templateUrl: './add-default-targets.component.html',
  styleUrls: ['./add-default-targets.component.scss']
})
export class AddDefaultTargetsComponent {

  btnValue:string = 'Individual Target'
  total:boolean = true;
  changeSingle2All(){
    this.total = !this.total;
    if(this.total == true){
        this.btnValue = 'Individual Target';
    } else{
      this.btnValue = 'Total Target';
    }
  }
}
