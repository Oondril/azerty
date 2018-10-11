import {Component} from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['./login.css', 'global.css']
})

export class LoginComponent {

  title = 'app';
  hello = false;
  page = 0;

  sayHi(){
    this.hello = true;
  }

  retour(){
    this.page = 0;
  }

  goToWelcomePage(){
    this.page = 1;
  }
}
