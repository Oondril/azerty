import {Component} from '@angular/core';
import {ApiSshService} from '../../services/api-ssh.service';

@Component({
  selector: 'attaque-brute-force',
  templateUrl: './attaque-brute-force.html',
  styleUrls: ['../../global.scss', './attaque-brute-force.scss']
})

export class AttaqueBruteForceComponent {

  constructor(private apiSshService: ApiSshService){}

  public listeMdp = [];
  public nouveauMdp = "";

  onKeydown(event, mdp){
    this.ajouterMdp(mdp);
  }

  ajouterMdp(mdp){
    if(mdp != ""){
      if(this.listeMdp.length < 5){
        this.listeMdp.push(mdp);
      } else {
        console.log("erreur");
      }
    }
    this.nouveauMdp = "";
  }

  supprimerMdp(i){
    this.listeMdp.splice(i, 1);
  }

  envoyerListeMdp(){
    this.apiSshService.writePasswordFile(this.listeMdp);
  }

  attaquer(){
    this.apiSshService.runBruteForceAttack();
  }

}
