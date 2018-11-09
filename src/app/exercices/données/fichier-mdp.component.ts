import {Component} from '@angular/core';
import {ApiSshService} from '../../services/api-ssh.service';

@Component({
  selector: 'fichier-mdp',
  templateUrl: './fichier-mdp.html',
  styleUrls: ['../../global.scss', './fichier-mdp.scss']
})

export class FichierMdpComponent {

  constructor(private apiSshService: ApiSshService){}

  public listeMdp = [];
  public nouveauMdp = "";

  onKeydown(event, mdp){
    this.ajouteMdp(mdp);
  }

  ajouteMdp(mdp){
    if(this.listeMdp.length < 6){
      this.listeMdp.push(mdp);
    } else {
      console.log("erreur");
    }
  }

  supprimeMdp(i){
    this.listeMdp.splice(i, 1);
  }

  envoyerListeMdp(){
    this.apiSshService.writePasswordFile(this.listeMdp);
  }

}
