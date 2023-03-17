import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  slideConfig = 
  {
    slidesToShow: 1, 
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    dots:true,
    prevArrow: false,
    nextArrow: false
  };

}
