import {Component, OnInit} from '@angular/core';
import {DataService} from '../services/data.service';
import {LoadingService} from '../services/loading.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'intro-component',
  templateUrl: './intro.html',
  styleUrls: ['./intro.scss', '../global.scss']
})

export class IntroComponent implements OnInit {

  private choixScenario = 1;

  private scenario;
  private textes;
  private listeTextesCurrentScenario = [];
  private listeActionsCurrentScenario = [];
  private actions;

  public currentScenario;
  public currentTexte;
  public listeActionsCurrentTexte = [];
  public isLoading;
  public showContexteScenario;
  public isScenarioStarted;

  constructor(private dataService: DataService, private loadingService : LoadingService) { }

  ngOnInit(){
    this.showContexteScenario = false;
    this.isScenarioStarted = false;
    this.isLoading = true;
    this.dataService.getScenario();
    this.dataService.getTextes();
    this.dataService.getAction();
    this.loadingService.displayLoadingSpinner(true);
    /*this.dataService.scenario.subscribe(
      res => {
        this.scenario = res;
        for(let i=0; i<this.scenario.length; i++){
          if(this.scenario[i].idScenario == this.choixScenario)
            this.currentScenario = this.scenario[i];
        }
        console.log(this.currentScenario);
        this.loadingService.displayLoadingSpinner(false);
        this.isLoading = false;
      }, error => {
        console.log(error);
      }
    )*/

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
      ),
      this.dataService.texte.map(
        res => {
          this.textes = res;
          for(let i=0; i<this.textes.length; i++){
            console.log(this.textes);
            if(this.textes[i].idScenario == this.choixScenario)
              this.listeTextesCurrentScenario.push(this.textes[i]);
            if(this.listeTextesCurrentScenario[i].branche == '0')
              this.currentTexte = this.listeTextesCurrentScenario[i];
          }
          console.log(this.currentTexte.branche);
        }, error => {
          console.log(error);
        }
      ),
      this.dataService.action.map(
        res => {
          this.actions = res;
          console.log(this.actions);
          for(let i=0; i<this.actions.length; i++){
            if(this.actions[i].idScenario == this.choixScenario)
              this.listeActionsCurrentScenario.push(this.actions[i]);
            for(let j=0; j<this.listeActionsCurrentScenario[i].idTextes.length; j++){
              if(this.listeActionsCurrentScenario[i].idTextes[j] === this.currentTexte.branche)
                this.listeActionsCurrentTexte.push(this.listeActionsCurrentScenario[i]);
            }
          }
          console.log(this.listeActionsCurrentTexte);
        }, error => {
          console.log(error);
        }
      ),
    ).skip(2).subscribe(
      res => {
        this.loadingService.displayLoadingSpinner(false);
        this.isLoading = false;
        console.log("skip")
      })
  }

  suivant(){
    this.showContexteScenario = true;
  }

  startScenario(){
    this.isScenarioStarted = true;
  }

  nextTexte(action){
    let idaction = action.idAction;
    for(let i=0; i<this.listeActionsCurrentScenario.length; i++){
      if(this.listeActionsCurrentScenario[i].idAction === idaction)
        this.listeActionsCurrentScenario[i].estUtilisee = true;
    }
    console.log(action);
  }


}
