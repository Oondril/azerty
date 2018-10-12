import {Component} from '@angular/core';
import {AppComponent} from './app.component';

@Component({
  selector: 'page-connexion',
  templateUrl: './page-connexion.html',
  styleUrls: ['./page-connexion.scss', './global.scss']
})

export class PageConnexionComponent {

  constructor(private appComponent:AppComponent) { }

  commencer(){
    this.appComponent.page = 3;
  }
}
