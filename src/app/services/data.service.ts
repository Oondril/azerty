import {Injectable} from '@angular/core';
import {Subject} from "rxjs/Rx";
import {Observable} from "rxjs/Observable";
import {ApiService} from './api.service';
import {ModeleScenario} from '../exercices/models/modele-scenario';
import {ScenarioResponse} from '../exercices/models/response/scenario.response';
import {ModeleTexte} from '../exercices/models/modele-texte';
import {ModeleAction} from '../exercices/models/modele-action';
import {ModelePrevention} from '../exercices/models/modele-prevention';
import {ModeleIndice} from '../exercices/models/modele-indice';
import {TexteResponse} from '../exercices/models/response/texte.response';
import {ActionResponse} from '../exercices/models/response/action.response';
import {PreventionResponse} from '../exercices/models/response/prevention.response';
import {IndiceResponse} from '../exercices/models/response/indice.response';

@Injectable()
export class DataService {

  private _scenario: Subject<any> = new Subject();
  public scenario: Observable<ScenarioResponse> = this._scenario.asObservable();

  private _texte: Subject<any> = new Subject();
  public texte: Observable<TexteResponse> = this._texte.asObservable();

  private _action: Subject<any> = new Subject();
  public action: Observable<ActionResponse> = this._action.asObservable();

  private _prevention: Subject<any> = new Subject();
  public prevention: Observable<PreventionResponse> = this._prevention.asObservable();

  private _indice: Subject<any> = new Subject();
  public indice: Observable<IndiceResponse> = this._indice.asObservable();

  public dataScenario : ModeleScenario;
  public dataTexte : ModeleTexte;
  public dataAction : ModeleAction;
  public dataPrevention : ModelePrevention;
  public dataIndice : ModeleIndice;

  constructor(private apiService: ApiService) {  }

  getScenario() {
    this.apiService.getScenario()
      .subscribe(
        res => {
          console.log(res);
          for(let i=0; i<res.length-1; i++){
            let scenario : ModeleScenario = new ModeleScenario(
              res.Data[i].idScenario,
              res.Data[i].duree,
              res.Data[i].titre,
              res.Data[i].contexte
            );
            this.dataScenario += scenario;
            this._scenario.next(scenario);
          }
          console.log(this.dataScenario);
        },
        err => {
          console.log("erreur");
        }
      );
  }

  getTextes() {
    this.apiService.getTextes()
      .subscribe(
        res => {
          console.log(res);
          let texte : ModeleTexte = new ModeleTexte(
            res.Data.idTexte,
            res.Data.idScenario,
            res.Data.titre,
            res.Data.texte,
            res.Data.branche
          );
          this.dataTexte = texte;
          this._texte.next(texte);
          console.log(this.dataTexte);
        },
        err => {
          console.log("erreur");
        }
      );
  }

  getAction() {
    this.apiService.getActions()
      .subscribe(
        res => {
          console.log(res);
          let action : ModeleAction = new ModeleAction(
            res.Data[0].idAction,
            res.Data[0].idScenario,
            res.Data[0].idTextes,
            res.Data[0].texte,
            res.Data[0].texteSuivant,
            res.Data[0].estUtilisee,
            res.Data[0].aPrevention,
            res.Data[0].aIndice
          );
          this.dataAction = action;
          this._action.next(action);
          console.log(this.dataAction);
        },
        err => {
          console.log("erreur");
        }
      );
  }

  getPrevention() {
    this.apiService.getPrevention()
      .subscribe(
        res => {
          console.log(res);
          let prevention : ModelePrevention = new ModelePrevention(
            res.Data[0].idPrevention,
            res.Data[0].idScenario,
            res.Data[0].idAction,
            res.Data[0].texte
          );
          this.dataPrevention = prevention;
          this._prevention.next(prevention);
          console.log(this.dataPrevention);
        },
        err => {
          console.log("erreur");
        }
      );
  }

  getIndice() {
    this.apiService.getIndice()
      .subscribe(
        res => {
          console.log(res);
          let indice : ModeleIndice = new ModeleIndice(
            res.Data[0].idIndice,
            res.Data[0].idScenario,
            res.Data[0].idAction,
            res.Data[0].texte
          );
          this.dataIndice = indice;
          this._indice.next(indice);
          console.log(this.dataIndice);
        },
        err => {
          console.log("erreur");
        }
      );
  }
}


