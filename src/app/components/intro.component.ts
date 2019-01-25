import {Component, OnInit} from '@angular/core';
import {DataService} from '../services/data.service';
import {LoadingService} from '../services/loading.service';
import {Observable} from 'rxjs/Observable';
import {ChronoService} from '../services/chrono.service';

@Component({
  selector: 'intro-component',
  templateUrl: './intro.html',
  styleUrls: ['./intro.scss', '../global.scss']
})

export class IntroComponent implements OnInit {

  private listeTextesCurrentScenario;
  private listeActionsCurrentScenario;

  public currentScenario;
  public currentTexte;
  public listeActionsCurrentTexte = [];
  public isLoading;
  public showContexteScenario;
  public isScenarioStarted;

  constructor(private dataService: DataService, private loadingService : LoadingService, private chronoService: ChronoService) { }

  ngOnInit(){
    this.showContexteScenario = false;
    this.isScenarioStarted = false;
    this.isLoading = true;
    this.dataService.getScenario();
    this.dataService.getTextes();
    this.dataService.getAction();
    this.loadingService.displayLoadingSpinner(true);

    Observable.merge(
      this.dataService.scenario.map(
        res => {
          //Récupération du scénario en cours
          this.currentScenario = res;
          console.log(this.currentScenario);
        }, error => {
          console.log(error);
        }
      ),
      this.dataService.texte.map(
        res => {
          //Récupération des textes du scénario en cours
          this.listeTextesCurrentScenario = res;
          //Sélection du texte à afficher : branche = 0
          for(let i=0; i<this.listeTextesCurrentScenario.length; i++){
            if(this.listeTextesCurrentScenario[i].branche == '0')
              this.currentTexte = this.listeTextesCurrentScenario[i];
          }
          console.log(this.currentTexte);
        }, error => {
          console.log(error);
        }
      ),
      this.dataService.action.map(
        res => {
          //Récupération des actions du scénario en cours
          this.listeActionsCurrentScenario = res;
          //Sélection des actions à afficher : celles dont la branche 0 est présente dans le tableau idTextes
          for(let i=0; i<this.listeActionsCurrentScenario.length; i++){
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
    ).skip(3).subscribe(
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

    //Démarrage du chronomètre
    this.chronoService.start(true);
  }

  goToNextTexte(action){
    //Mise à jour du tableau d'actions : estUtilisee = true pour l'affichage
    let idaction = action.idAction;
    for(let i=0; i<this.listeActionsCurrentScenario.length; i++){
      if(this.listeActionsCurrentScenario[i].idAction === idaction)
        this.listeActionsCurrentScenario[i].estUtilisee = true;
    }

    //Mise à jour du texte grâce au champ texteSuivant de l'action sélectionnée
    let texteSuivant = action.texteSuivant;
    for(let i=0; i<this.listeTextesCurrentScenario.length; i++){
      if(this.listeTextesCurrentScenario[i].branche == texteSuivant)
        this.currentTexte = this.listeTextesCurrentScenario[i];
    }

    // Mise à jour des actions qui correspondent au nouveau texte
    this.listeActionsCurrentTexte = [];
    for(let i=0; i<this.listeActionsCurrentScenario.length; i++) {
      for(let j=0; j<this.listeActionsCurrentScenario[i].idTextes.length; j++) {
        if(this.listeActionsCurrentScenario[i].idTextes[j] === this.currentTexte.branche)
          this.listeActionsCurrentTexte.push(this.listeActionsCurrentScenario[i]);
      }
    }
  }

}
