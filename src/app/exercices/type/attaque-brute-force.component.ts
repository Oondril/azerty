import {Component} from '@angular/core';
import {ApiSshService} from '../../services/api-ssh.service';

@Component({
  selector: 'attaque-brute-force',
  templateUrl: './attaque-brute-force.html',
  styleUrls: ['../../global.scss', './attaque-brute-force.scss']
})

export class AttaqueBruteForceComponent {

  constructor(private apiSshService: ApiSshService){
    this.apiSshService.shellAnswer.subscribe((res) => {
      let succes = '[22][ssh]';
      let fini ='root@kali';
      if(res.includes(succes)){
        this.succesLine = res;
        this.attaqueSucces = true;
      }
      if(this.attaqueLancee && res.includes(fini)){
        this.attaqueTerminee = true;
        console.log('! Attaque terminée !');
        if(this.attaqueTerminee && !this.attaqueSucces){
          console.log("ECHEC DE L'ATTAQUE");
          this.resetAttack();
        }
      }},(err) => {
      console.log(err);
    });
  }

  public listeMdp = [];
  public nouveauMdp = "";
  public listeEnvoyee = false;
  public attaqueLancee = false;
  public attaqueSucces = false;
  public attaqueTerminee = false;
  public succesLine = '';

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
    this.listeEnvoyee = true;
  }

  attaquer(){
    this.apiSshService.runBruteForceAttack();
    this.attaqueLancee = true;
  }

  resetAttack(){
    this.attaqueTerminee = false;
    this.attaqueLancee = false;
    this.attaqueSucces = false;
    this.succesLine = '';
    this.listeEnvoyee = false;
    this.listeMdp = [];
    this.nouveauMdp = '';
  }


}
