import {Component} from '@angular/core';
import {AppComponent} from './app.component';

@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['global.scss']
})

export class LoginComponent {

  constructor(private appComponent:AppComponent) { }

  connexion(){
    this.appComponent.page = 1;
  }
}
