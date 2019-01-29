import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {DataService} from '../services/data.service';
import {LoadingService} from '../services/loading.service';
import {Observable} from 'rxjs/Observable';
import {ChronoService} from '../services/chrono.service';
import {BruteForceService} from '../services/brute-force.service';

@Component({
  selector: 'intro-component',
  templateUrl: './intro.html',
  styleUrls: ['./intro.scss', '../global.scss']
})

export class IntroComponent implements OnInit {

  @ViewChild('scrollable') private scrollable: ElementRef;

  private listeTextesCurrentScenario;
  private listeActionsCurrentScenario;
  private listePrevention;
  private listeIndices;

  public currentScenario;
  public currentTexte;
  public listeActionsCurrentTexte = [];
  public currentPrevention;
  public listeCurrentIndices;
  public isAttackSuccess;

  public isLoading;
  public isScenarioStarted;
  public isScenarioFinished;
  public showContexteScenario;
  public showBruteForceButton;
  public showPrevention;
  public showListeIndices;
  public startBruteForce;

  constructor(private dataService: DataService, private loadingService : LoadingService, private chronoService: ChronoService, private bruteForceService: BruteForceService) { }

  ngOnInit(){
    this.showContexteScenario = false;
    this.showBruteForceButton = false;
    this.isScenarioStarted = false;
    this.isScenarioFinished = false;
    this.startBruteForce = false;
    this.showListeIndices = false;
    this.isAttackSuccess = false;
    this.listeCurrentIndices = [
      "Liste des mots de passe les plus utilisés en 2018 :",
      "123456",
      "123456790",
      "qwerty",
      "12345678",
      "111111",
      "1234567890",
      "1234567",
      "password",
      "123123",
      "987654321",
      "qwertyuiop",
      "mynoob",
      "123321",
      "666666",
      "18atcskd2w"];
    this.isLoading = true;
    this.loadingService.displayLoadingSpinner(true);
    this.dataService.getScenario();
    this.dataService.getTextes();
    this.dataService.getAction();
    this.dataService.getPrevention();
    this.dataService.getIndice();

    Observable.merge(
      this.dataService.scenario.map(
        res => {
          //Récupération du scénario en cours
          this.currentScenario = res;
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
        }, error => {
          console.log(error);
        }
      ),
      this.dataService.prevention.map(
        res => {
          //Récupération de la liste de prévention du scénario en cours
          this.listePrevention = res;
        }, error => {
          console.log(error);
        }
      ),
      this.dataService.indice.map(
        res => {
          //Récupération de la liste de prévention du scénario en cours
          this.listeIndices = res;
        }, error => {
          console.log(error);
        }
      ),
      this.bruteForceService.bruteForceSuccess$.map(
        res => {
          this.isAttackSuccess = res;
        }
      )
    ).skip(5).subscribe(
      res => {
        this.loadingService.displayLoadingSpinner(false);
        this.isLoading = false;
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
    let idAction = action.idAction;
    let texteSuivant = action.texteSuivant;

    //Mise à jour de la liste des indices
    for(let i=0; i<this.listeIndices.length; i++){
      if(this.listeIndices[i].idAction == idAction){
        this.listeCurrentIndices.push(this.listeIndices[i].texte);
      }
    }
    if(this.showListeIndices){
      this.scrollToBottom();
    }

    //Affichage de la prévention si nécessaire
    for(let i=0; i<this.listePrevention.length; i++){
      if(this.listePrevention[i].idAction == idAction){
        this.currentPrevention = this.listePrevention[i];
        this.showPrevention = true;
      }
    }

    //Mise à jour du tableau d'actions : estUtilisee = true pour l'affichage
    for(let i=0; i<this.listeActionsCurrentScenario.length; i++){
      if(this.listeActionsCurrentScenario[i].idAction === idAction)
        this.listeActionsCurrentScenario[i].estUtilisee = true;
    }

    //Mise à jour du texte grâce au champ texteSuivant de l'action sélectionnée
    for(let i=0; i<this.listeTextesCurrentScenario.length; i++){
      if(this.listeTextesCurrentScenario[i].branche == texteSuivant)
        this.currentTexte = this.listeTextesCurrentScenario[i];
    }

    //Mise à jour des actions qui correspondent au nouveau texte
    this.listeActionsCurrentTexte = [];
    for(let i=0; i<this.listeActionsCurrentScenario.length; i++) {
      for(let j=0; j<this.listeActionsCurrentScenario[i].idTextes.length; j++) {
        if(this.listeActionsCurrentScenario[i].idTextes[j] === this.currentTexte.branche)
          this.listeActionsCurrentTexte.push(this.listeActionsCurrentScenario[i]);
      }
    }

    //Cas particulier : brute force
    if(idAction == 18){
      this.showBruteForceButton = true;
    }
  }

  goToConclusion(){
    this.startBruteForce = false;
    for(let i=0; i<this.listeTextesCurrentScenario.length; i++){
      if(this.listeTextesCurrentScenario[i].branche == '0.3.0.3.1.0.0')
        this.currentTexte = this.listeTextesCurrentScenario[i];
    }
    this.isScenarioFinished = true;
  }

  showIndices(){
    this.showListeIndices = true;
  }

  closeIndices(){
    this.showListeIndices = false;
  }

  scrollToBottom(){
    try{
      this.scrollable.nativeElement.scrollTop = this.scrollable.nativeElement.scrollHeight;
    }catch(err){}
  }

  closePrevention(){
    this.showPrevention = false;
  }

  goToBruteForce(){
    this.showBruteForceButton = false;
    this.startBruteForce = true;
  }

  finishScenario(){
    window.location.reload();
  }

}
