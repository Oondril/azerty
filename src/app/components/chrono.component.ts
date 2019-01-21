import {AppComponent} from '../app.component';
import {Component} from '@angular/core';
import { Timer } from '../utils/chrono/timer';
import { State } from '../utils/chrono/state';

@Component({
  selector: 'chrono-component',
  templateUrl: './chrono.html',
  styleUrls: ['./chrono.scss', '../global.scss']
})

export class ChronoComponent {

  constructor(private appComponent:AppComponent) {
    this._timer.setTime(10,0);
    this.play();
  }

  private _btnPlay: string = 'Démarrer';
  private _timer: Timer = new Timer();
  private _state: State = new State();

  play() {
    this._timer.start();
    this._state.setPlay();
    this._btnPlay = 'Continuer';
  }
  stop() {
    this._timer.stop();
    this._state.setStop();
  }
  backward() {
    this._timer.reset();
    this._state.setBackward();
    this._btnPlay = 'Démarrer';
  }
}
