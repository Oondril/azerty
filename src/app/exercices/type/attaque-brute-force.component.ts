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

        this.consoleNoobLog(this.resultSuccesTreatment(res));
      }
      if(this.attaqueLancee && res.includes(fini)){
        this.attaqueTerminee = true;
        console.log('! Attaque terminée !');
        if(!this.attaqueSucces){
          console.log("ECHEC DE L'ATTAQUE");
          this.consoleNoobLog("<b>-></b> Echec de l'attaque");
          this.resetAttack();
        }else{
          console.log("SUCCES DE L'ATTAQUE");
          this.consoleNoobLog("<b>-></b> Succès de l'attaque");
        }
      }},(err) => {
      console.log(err);
    });
  }

  public messageNoob = '';
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
    this.consoleNoobLog("<b>-></b> Démarrage de l'attaque ... ");
  }

  resetAttack(){
    this.attaqueTerminee = false;
    this.attaqueLancee = false;
    this.attaqueSucces = false;
    this.succesLine = '';
    this.listeEnvoyee = false;
    this.listeMdp = [];
    this.nouveauMdp = '';
    this.apiSshService.writePasswordFile(this.listeMdp);
  }

  consoleNoobLog(msg: string){
    this.messageNoob = msg;
    console.log('messageNoob : '+ this.messageNoob);
  }

  resultSuccesTreatment(str: string){
    let loginName = 'login: ';
    let psswdName = 'password: ';
    let indexLogin = str.indexOf(loginName);
    let indexPassword = str.indexOf(psswdName);
    let login = str.slice(indexLogin, indexPassword);
    let password = str.slice(indexPassword);
    let loginFinal = login.slice(loginName.length);
    let passwordFinal = password.slice(psswdName.length);
    const log = "<b>-></b> Identifiants valides :  <br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;<> Identifiant : <b>" + loginFinal + "</b><br/>&nbsp;&nbsp;&nbsp;&nbsp;<> Mot de passe : <b>" + passwordFinal + "</b></br></br>";
    return log;
  }


}
