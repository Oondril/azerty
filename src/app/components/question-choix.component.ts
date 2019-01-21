import {AppComponent} from '../app.component';
import {Component} from '@angular/core';
import { Timer } from '../utils/chrono/timer';
import { State } from '../utils/chrono/state';
import {DataService} from '../services/data.service';

@Component({
  selector: 'question-choix-component',
  templateUrl: './question-choix.html',
  styleUrls: ['./question-choix.scss', '../global.scss']
})

export class QuestionChoixComponent {

  text = '<br/>Faire blablablabla<br/>Et aussi blablablabla<br/>Et enfin blablabla';
  propositions = [{id: 0, text: 'faire ceci'},
                  {id : 1, text: 'faire cela'},
                  {id:2, text: 'faire ceci cela'}];

  public data;

  constructor(private dataService: DataService) {
  }

  getTexte(){
    this.dataService.getTextes();
  }

  getActions(){
    this.dataService.getAction();
  }
}
