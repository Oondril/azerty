import {Component} from '@angular/core';

@Component({
  selector: 'welcome-page',
  templateUrl: './welcome.html',
  styleUrls: ['./welcome.css', './global.css']
})

export class WelcomePageComponent {

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
