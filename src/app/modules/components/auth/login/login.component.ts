import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private router : Router){}
  slideConfig = 
  {
    slidesToShow: 1, 
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    dots:true,
    prevArrow: false,
    nextArrow: false
  };

  toLogin(){
    this.router.navigate(['/dashboard']);;
  }

}
