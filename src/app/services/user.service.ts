import {Injectable} from '@angular/core';
import {Subject} from "rxjs/Rx";
import {Observable} from "rxjs/Observable";
import {ApiService} from './api.service';
import {ModeleExercice} from '../exercices/models/modele-exercice.component';
import {ExerciceResponse} from '../exercices/models/response/exercice.response';

@Injectable()
export class UserStoreService {

  private _exercice: Subject<any> = new Subject();
  public exercice: Observable<ExerciceResponse> = this._exercice.asObservable();

  constructor(private apiService: ApiService) {  }

  getExercice() {
    this.apiService.getExercice()
      .subscribe(
        res => {
          let exercice:ModeleExercice = new ModeleExercice(
            res.data.id,
            res.data.attributes.explications_attaque,
            res.data.attributes.explications_exercice,
            res.data.attributes.explications_fonctionnement
          );
          this._exercice.next(exercice);
        },
        err => {
          console.log("erreur");
        }
      );
  }
}


