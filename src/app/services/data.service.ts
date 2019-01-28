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

  //Modifier l'indice du scénario ici
  private choixIndiceScenario = 1;

  private dataScenario = [];
  public dataTexte = [];
  public dataAction = [];
  public dataPrevention = [];
  public dataIndice = [];

  public currentScenario;
  public listeTextesCurrentScenario = [];
  public listeActionsCurrentScenario = [];

  constructor(private apiService: ApiService) {  }

  getScenario() {
    this.apiService.getScenario()
      .subscribe(
        res => {
          //Récupération de tous les scénarios de la BD
          for(let i=0; i<res.Data.length; i++){
            let scenario : ModeleScenario = new ModeleScenario(
              res.Data[i].idScenario,
              res.Data[i].duree,
              res.Data[i].titre,
              res.Data[i].contexte
            );
            this.dataScenario.push(scenario);
          }
          //Sélection du scénario à afficher grâce à la variable choixIndiceScenario
          for(let i=0; i<this.dataScenario.length; i++){
            if(this.dataScenario[i].idScenario == this.choixIndiceScenario)
              this.currentScenario = this.dataScenario[i];
          }
          this._scenario.next(this.currentScenario);
          console.log(this.currentScenario);
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
          //Récupération de tous les textes de la BD
          for(let i=0; i<res.Data.length; i++) {
            let texte: ModeleTexte = new ModeleTexte(
              res.Data[i].idTexte,
              res.Data[i].idScenario,
              res.Data[i].titre,
              res.Data[i].texte,
              res.Data[i].branche
            );
            this.dataTexte.push(texte);
          }
          //Sélection des textes du scénario en cours
          for(let i=0; i<this.dataTexte.length; i++){
            if(this.dataTexte[i].idScenario == this.choixIndiceScenario)
              this.listeTextesCurrentScenario.push(this.dataTexte[i]);
          }
          this._texte.next(this.listeTextesCurrentScenario);
          console.log(this.listeTextesCurrentScenario);
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
          for(let i=0; i<res.Data.length; i++) {
            //Récupération de toutes les actions de la BD
            let action: ModeleAction = new ModeleAction(
              res.Data[i].idAction,
              res.Data[i].idScenario,
              res.Data[i].idTextes,
              res.Data[i].texte,
              res.Data[i].texteSuivant,
              res.Data[i].estUtilisee,
              res.Data[i].aPrevention,
              res.Data[i].aIndice
            );
            this.dataAction.push(action);
          }
          //Sélection des actions du scénario en cours
          for(let i=0; i<this.dataAction.length; i++){
            if(this.dataAction[i].idScenario == this.choixIndiceScenario)
              this.listeActionsCurrentScenario.push(this.dataAction[i]);
          }
          this._action.next(this.listeActionsCurrentScenario);
          console.log(this.listeActionsCurrentScenario);
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
          for(let i=0; i<res.Data.length; i++) {
            let prevention: ModelePrevention = new ModelePrevention(
              res.Data[i].idPrevention,
              res.Data[i].idScenario,
              res.Data[i].idAction,
              res.Data[i].texte
            );
            this.dataPrevention.push(prevention);
          }
          this._prevention.next(this.dataPrevention);
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
          for(let i=0; i<res.Data.length; i++) {
            let indice: ModeleIndice = new ModeleIndice(
              res.Data[i].idIndice,
              res.Data[i].idScenario,
              res.Data[i].idAction,
              res.Data[i].texte
            );
            this.dataIndice.push(indice);
          }
          this._indice.next(this.dataIndice);
          console.log(this.dataIndice);
        },
        err => {
          console.log("erreur");
        }
      );
  }
}


