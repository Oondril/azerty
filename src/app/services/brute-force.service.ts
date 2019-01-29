import {Observable, Observer} from "rxjs";
import {Injectable} from "@angular/core";
import {Subject} from 'rxjs/Subject';
import {ScenarioResponse} from '../exercices/models/response/scenario.response';

/**
 * BruteForceService
 */
@Injectable()
export class BruteForceService {

  bruteForceSuccess$: Observable<any>;
  observer: Observer<string>;

  constructor() {
    this.bruteForceSuccess$ = new Observable(
      observer =>
        this.observer = observer).share();
  }

  isBruteForceSuccess(value) {
    if(this.observer) {
      this.observer.next(value);
    }
  }
}
