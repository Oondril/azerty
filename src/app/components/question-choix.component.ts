import {AppComponent} from '../app.component';
import {Component} from '@angular/core';
import { Timer } from '../utils/chrono/timer';
import { State } from '../utils/chrono/state';

@Component({
  selector: 'question-choix-component',
  templateUrl: './question-choix.component.html',
  styleUrls: ['./question-choix.component.scss', '../global.scss']
})

export class QuestionChoixComponent {

  text = '<br/>Faire blablablabla<br/>Et aussi blablablabla<br/>Et enfin blablabla';
 propositions = [{id: 0, text: 'faire ceci'},
                  {id : 1, text: 'faire cela'},
                  {id:2, text: 'faire ceci cela'}];
  constructor() {
  }

}
