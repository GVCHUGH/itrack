import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-login-detail',
  templateUrl: './login-detail.component.html',
  styleUrls: ['./login-detail.component.scss']
})
export class LoginDetailComponent {

  constructor(private dialog : MatDialog){}
  toClose(){
    this.dialog.closeAll();
  }
}
