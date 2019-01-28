import {AppComponent} from '../app.component';
import {Component, OnInit} from '@angular/core';
import { Timer } from '../utils/chrono/timer';
import { State } from '../utils/chrono/state';
import {ChronoService} from '../services/chrono.service';
import {DataService} from '../services/data.service';

@Component({
  selector: 'chrono-component',
  templateUrl: './chrono.html',
  styleUrls: ['./chrono.scss', '../global.scss']
})

export class ChronoComponent implements OnInit{

  constructor(private appComponent:AppComponent, private chronoService: ChronoService, private dataService: DataService) { }

  private scenario;
  private _btnPlay: string = 'Démarrer';
  private _timer: Timer = new Timer();
  private _state: State = new State();

  ngOnInit(){
    this.dataService.getScenario();
    this.dataService.scenario.subscribe(
      res => {
        this.scenario = res;
        let dureeScenario = this.scenario.duree;
        this._timer.setTime(dureeScenario,0);
      }
    );
    this.chronoService.startChrono$.subscribe(
      res => {
        this.play();
      }
    )
  }

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
