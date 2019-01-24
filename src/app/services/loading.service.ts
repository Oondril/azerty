import {Observable, Observer} from "rxjs";
import {Injectable} from "@angular/core";

/**
 * LoadingService - Display a loading spinner when page is loading.
 */
@Injectable()
export class LoadingService {

  loading$: Observable<any>;
  observer: Observer<string>;

  constructor() {
    this.loading$ = new Observable(
      observer =>
        this.observer = observer).share();
  }

  displayLoadingSpinner(value) {
    if(this.observer) {
      this.observer.next(value);
    }
  }
}
