import {AppComponent} from '../app.component';
import {Component} from '@angular/core';
import {DataService} from '../services/data.service';

@Component({
  selector: 'intro-component',
  templateUrl: './intro.html',
  styleUrls: ['./intro.scss', '../global.scss']
})

export class IntroComponent {

  text = '<br/>Faire blablablabla<br/>Et aussi blablablabla<br/>Et enfin blablabla';
  propositions = [{id: 0, text: 'faire ceci'},
    {id : 1, text: 'faire cela'},
    {id:2, text: 'faire ceci cela'}];

  public data;

  constructor(private dataService: DataService) {
  }

  getScenario() {
    this.dataService.getScenario();
  }
}
