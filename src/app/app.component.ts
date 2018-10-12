import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', 'global.css']
})

export class AppComponent {

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
