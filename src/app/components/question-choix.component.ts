import {AppComponent} from '../app.component';
import {Component, OnInit} from '@angular/core';
import { Timer } from '../utils/chrono/timer';
import { State } from '../utils/chrono/state';
import {DataService} from '../services/data.service';
import {Observable} from 'rxjs/Observable';
import {LoadingComponent} from './loading.component';
import {LoadingService} from '../services/loading.service';

@Component({
  selector: 'question-choix-component',
  templateUrl: './question-choix.html',
  styleUrls: ['./question-choix.scss', '../global.scss']
})

export class QuestionChoixComponent implements OnInit {

  private scenario;
  private textes;
  private actions;
  private choixScenario = 1;

  public currentScenario;

  public isLoading;
  public showContexteScenario;

  constructor(private dataService: DataService, private loadingService: LoadingService) { }

  ngOnInit(){
    this.showContexteScenario = false;
    this.isLoading = true;
    this.dataService.getScenario();
    this.loadingService.displayLoadingSpinner(true);
    Observable.merge(
      this.dataService.scenario.map(
        res => {
          this.scenario = res;
          for(let i=0; i<this.scenario.length; i++){
            if(this.scenario[i].idScenario == this.choixScenario)
              this.currentScenario = this.scenario[i];
          }
          console.log(this.currentScenario);
        }, error => {
          console.log(error);
        }
      )
    ).skip(0).subscribe(
      res => {
        this.loadingService.displayLoadingSpinner(false);
        this.isLoading = false;
        console.log("skip")
      }
    );
    this.dataService.getScenario();
    this.dataService.getTextes();
    this.dataService.getAction();
  }

  getScenario(){
    this.dataService.getScenario();
    this.dataService.getTextes();
    this.dataService.getAction();
  }

  getTexte(){
    this.dataService.getTextes();
  }

  getActions(){
    this.dataService.getAction();
  }
}
