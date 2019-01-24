import {Observable, Observer} from "rxjs";
import {Injectable} from "@angular/core";
import {ModeleScenario} from '../exercices/models/modele-scenario';
import {DataService} from './data.service';
import {ModeleTexte} from '../exercices/models/modele-texte';
import {ModeleAction} from '../exercices/models/modele-action';
import {Subject} from 'rxjs/Subject';

/**
 * LoadingService - Display a loading spinner when page is loading.
 */
@Injectable()
export class ScenarioService {

  public textes: Array<ModeleTexte>;
  public actions: Array<ModeleAction>;

  public currentTexte: ModeleTexte;
  public currentActions: ModeleAction;

  public currentTexteIndex: number;

  private nextTexte: Subject<any> = new Subject<any>();
  _nextTexte$ = this.nextTexte.asObservable();

  constructor(private dataService: DataService){ }

  init(scenario : ModeleScenario){
    this.dataService.getTextes();
    this.dataService.getAction();
  }
}
