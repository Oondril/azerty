import {Observable, Observer} from "rxjs";
import {Injectable} from "@angular/core";
import {Subject} from 'rxjs/Subject';
import {ScenarioResponse} from '../exercices/models/response/scenario.response';

/**
 * ChronoService - Lance le chrono au démarrage du scénario
 */
@Injectable()
export class ChronoService {

  startChrono$: Observable<any>;
  observer: Observer<string>;

  constructor() {
    this.startChrono$ = new Observable(
      observer =>
        this.observer = observer).share();
  }

  start(value) {
    if(this.observer) {
      this.observer.next(value);
    }
  }
}
